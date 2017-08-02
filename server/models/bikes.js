var mongoose = require('mongoose');
var BikeSchema = new mongoose.Schema({
  name: {type:String, required:[true,"No username!"]}
}, {timestamps:true})
var Bike = mongoose.model('User', BikeSchema);