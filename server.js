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
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public', "dist")));
app.use(express.static(path.join(__dirname, 'public', "src", "assets", "apparel_images")));
app.use(express.static(path.join(__dirname, 'public', "src", 'assets', 'bikes_images')));
require('./server/config/mongoose.js');

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
app.listen(6789,()=>console.log("Listening on port 6789"));
