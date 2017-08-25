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

  getExpensiveAccessories: (req, res) => {
    Accessory.find({}).sort('-cost').exec((err, accessories) => {
      if(err){
      }else{
        return res.json(accessories);
      }
    })
  },

  getCheapestAccessories: (req, res) => {
    Accessory.find({}).sort('+cost').exec((err, accessories) => {
      if(err){
      }else{
        return res.json(accessories);
      }
    })
  },

  getPopularAccessories: (req, res) => {
    Accessory.find({}).sort('-bought').exec((err, accessories) => {
      if(err){
      }else{
        return res.json(accessories);
      }
    })
  },

  getLimitedAccesories: (req, res) => {
    Accessory.find({limited: true}, (err, accessories) => {
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
    event.save((err, event) => {
      if(err){
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
// CART METHODS
  getCart: (req, res) => {
    if(!req.session.cart){
      req.session.cart =[];
    }
    return res.json(req.session.cart);
  },

  addItem: (req, res) => {
    Accessory.find({_id: req.params.id}, (err, accessory) => {
      if(err){
        Bike.find({_id: req.params.id}, (err, bike) => {
          if(err){
            Apparel.find({_id: req.params.id}, (err, apparel) => {
              if(err){
                console.log("SOMETHING WENT TOTALLY WRONG @ CONTORLLER ADD ITEM TO CART");
              }else{
                console.log("REQ SESSION CART APPAREL~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
                if(req.session.cart.length > 0){
                  for(var i = 0; i < req.session.cart.length; i++){
                    if(req.session.cart[i]._id = req.params.id){
                      req.session.cart[i].qty ++;
                      req.session.save();
                      var added = true;
                    }
                  }
                  if(!added){
                    accessory[0].qty = 1;
                    req.session.cart.push(accessory[0]);
                    req.session.save();
                    return res.json({success: true});
                  }
                }else{
                    bike.qty = 1;
                    req.session.cart.push(apparel);
                    req.session.save();
                    return res.json({success: true});
                }
              }
            })
          }else{
            console.log("REQ SESSION CART BIKE~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
            if(req.session.cart.length > 0){
              for(var i = 0; i < req.session.cart.length; i++){
                if(req.session.cart[i]._id = req.params.id){
                  req.session.cart[i].qty ++;
                  req.session.save();
                  var added = true;
                }
              }
              if(!added){
                accessory[0].qty = 1;
                req.session.cart.push(accessory[0]);
                req.session.save();
                return res.json({success: true});
              }
            }else{
              bike[0].qty = 1;
              req.session.cart.push(bike[0]);
              req.session.save();
              return res.json({success: true});
              }
            }
          })
      }else{
        if(req.session.cart.length > 0){
          for(var i = 0; i < req.session.cart.length; i++){
            if(req.session.cart[i]._id == req.params.id){
              req.session.cart[i].qty ++;
              req.session.save();
              var added = true;
            }
          }
          if(!added){
            accessory[0].qty = 1;
            req.session.cart.push(accessory[0]);
            req.session.save();
            return res.json({success: true});
          }
        }else{
          accessory[0].qty = 1;
          req.session.cart.push(accessory[0]);
          req.session.save();
          return res.json({success: true});
        }
        }
      })
    },

  removeItem: (req, res) => {
    for(var i = 0; i < req.session.cart.length; i++){
      if(req.session.cart[i]._id == req.params.id){
        req.session.cart.splice(i, 1);
      }
    }
    req.session.save();
    return res.json(req.session.cart);
  },

  clearCart: (req, res) => {
    req.session.cart = [];
    req.session.save();
    return res.json(req.session.cart);
  }

}
