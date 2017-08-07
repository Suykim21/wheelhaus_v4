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
require('./server/config/mongoose.js');
var route = require('./server/config/routes.js')(app)
app.get('*', (req,res)=>{
  res.sendFile(path.resolve('public/dist/index.html')) 
})
app.listen(6789,()=>console.log("Listening on port 6789"));