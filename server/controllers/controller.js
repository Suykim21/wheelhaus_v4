let mongoose = require('mongoose');
// var User = mongoose.model('User');
// var Product = mongoose.model('Product');
var Accessory = mongoose.model('Accessory');
var Event = mongoose.model('Event');
// var MongoClient = require('mongodb').MongoClient;

// FOR FILE UPLOADS
var fs = require('fs');
var multer = require("multer");

module.exports = {
  addAccessoryImage: (req, res) => {
    var storage = multer.diskStorage({ //multers disk storage settings
      destination: function (req, file, cb) {
        cb(null, './public/src/assets/accessories_images');
      },
      filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
      }
    });

    var upload = multer({ //multer settings
      storage: storage
    }).single('file');
    upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }else{
      res.json(req.file.filename);
    }
  })
},

  addAccessory: (req, res) => {
    var accessory = new Accessory(req.body);
    accessory.save((err, accessory) => {
      if(err){
      }else{
        return;
      }
    })
  },

  getAllAccessories: (req, res) => {
    Accessory.find({}, (err, accessories) => {
      if(err){
        console.log(err);
      }else{
        return res.json(accessories);
      }
    })
  },
  addEventImage: (req, res) => {
    var storage = multer.diskStorage({ //multers disk storage settings
      destination: function (req, file, cb) {
        cb(null, './public/src/assets/events_images');
      },
      filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
      }
    });

    var upload = multer({ //multer settings
      storage: storage
    }).single('file');
    upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }else{
      res.json(req.file.filename);
    }
  })
},

  addEvent: (req, res) => {
    var event = new Event(req.body);
    console.log(req.body);
    console.log("**** @ ADDEVENT in CONTROLLER ~~~~~~~~~~~~~~~~~~~~~~")
    event.save((err, event) => {
      if(err){
        console.log(err);
        console.log("ERROR IN CONTROLLER @ ADD EVENT");
      }else{
        return;
      }
    })
  },

  getAllEvents: (req, res) => {
    Event.find({}, (err, event) => {
      if(err){
        console.log(err);
      }else{
        return res.json(event);
      }
    })
  },

  getEvent: (req, res) => {
    Event.findOne({_id: req.params.id}, (err, event) =>{
      if(err){
        console.log(err)
      }else{
        return res.json(event);
      }
    })
  },

  getCart: (req, res) => {
    if(!req.session.cart){
      req.session.cart = [
        {
          '_id' : 1,
          'name':'BurgerWallet',
          'cost': 100,
          'qty': 1,
          'path': 'file-1502839909463.jpg',
        },
        {
          '_id': 2,
          'name':'TacoWallet',
          'cost': 500,
          'qty': 3,
          'path': 'file-1502839909463.jpg',
        }
      ];
      console.log(req.session.cart);
      console.log("CART INITIALIZED ~~~~~~~~~~~~~~~~~~~~~~~~~~")
    }
    return res.json(req.session.cart);
  },

  removeItem: (req, res) => {
    console.log(req.session.cart[req.params.id]);
    console.log('remove button clicked ~~~~~~~~~~~~~~~~~~~~~~')
    for(var i = 0; i < req.session.cart; i++){
      if(req.session.cart[i]._id == req.params.id){
        cart.splice(i, 1);
      }
    }
    return;
  }
}
