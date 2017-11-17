var mongoose = require('mongoose');
var InfoSchema = new mongoose.Schema({
  name: {type:String, min:3, required:[true,"Require your name"]},
  email: {type:String, required:[true, "Require valid email address"]},
  subject: {type:String, required:[true,"Require subject line"]},
  message: {type:String, required:[true,"Require message"]},
}, {timestamps:true})
var Info = mongoose.model('Info', InfoSchema);
