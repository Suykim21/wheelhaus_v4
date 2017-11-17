var mongoose = require('mongoose');
var InfoSchema = new mongoose.Schema({
  name: {type:String, min:3, required:[true,"No name!"]},
  email: {type:String, required:[true, "You need to give it a description!"]},
  subject: {type:String, required:[true,"You need to give it a price!"]},
  message: {type:String, required:[true,"You need to give it a qty!"]},
}, {timestamps:true})
var Info = mongoose.model('Info', InfoSchema);
