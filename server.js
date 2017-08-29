var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
let session = require('express-session');
var sessionInfomation = {
  secret:'theMostSecureSecretKeyEver',
  resave:false,
  saveUninitialized: true,
  name:'myCookie',
  cookie: {
  secure: false,
  httpOnly:false,
  maxAge: 36000000
  }
}
app.use(session(sessionInfomation));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', "dist")));
app.use(express.static(path.join(__dirname, 'public', "dist", "assets", "apparel")));
app.use(express.static(path.join(__dirname, 'public', "dist", 'assets', 'accessories_images')));
app.use(express.static(path.join(__dirname, 'public', "dist", 'assets', 'events_images')));

require('./server/config/mongoose.js');

// FOR CORSS-ORIGIN IMAGE UPLOAD
// app.use(function(req, res, next) { //allow cross origin requests
//   res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//   res.header("Access-Control-Allow-Origin", "http://localhost:3001");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Credentials", true);
//   next();
// });

app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var route = require('./server/config/routes.js')(app)
app.get('*', (req,res)=>{
  res.sendFile(path.resolve('public/dist/index.html'))
})
app.listen(3000,()=>console.log("Listening on port 3000"));
