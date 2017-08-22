var mongoose = require('mongoose');
var BikeSchema = new mongoose.Schema({
  name: {type:String, required:[true,"No name!"]},
  description: {type:String, required:[true, "You need to give it a description!"]},
  cost: {type:Number, required:[true,"You need to give it a price!"]},
  qty: {type:Number, required:[true,"You need to give it a qty!"]},
  bought: {type:Number, required:[false], default: 0},
  path: {type:String},
  limited: {type:Boolean}
}, {timestamps:true})
var Bike = mongoose.model('Bike', BikeSchema);
