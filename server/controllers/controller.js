let mongoose = require('mongoose');
var Accessory = mongoose.model('Accessory');
var Bike = mongoose.model('Bike');
var Event = mongoose.model('Event');
var Apparel = mongoose.model('Apparel');
// var MongoClient = require('mongodb').MongoClient;
// FOR FILE UPLOADS
var multer = require("multer");
// DECLARING APPAREL FILE UPLOAD VARIABLE
var apparelStorage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
      cb(null, './public/src/assets/apparel_images');
  },
  filename: function (req, file, cb) {
      var datetimestamp = Date.now();
      cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  }
});
var apparelUpload = multer({ //multer settings
  storage: apparelStorage
}).single('file');

// DECLARING ACCESSORIES FILE UPLOAD VARIABLE
var accessoryStorage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, '/var/www/wheelhaus/public/dist/assets/accessories_images');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  }
});
var accessoryUpload = multer({ //multer settings
  storage: accessoryStorage
}).single('file');

// DECLARING BIKE-STORE FILE UPLOAD VARIABLE
var bikeStorage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, '/var/www/wheelhaus/public/dist/assets/bikes_images');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  }
});
var bikeUpload = multer({ //multer settings
  storage: bikeStorage
}).single('file');

// DECLARING EVENT FILE UPLOAD VARIABLE
var eventStorage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, '/var/www/wheelhaus/public/dist/assets/events_images');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
  }
});
var eventUpload = multer({ //multer settings
  storage: eventStorage
}).single('file');

module.exports = {
  addAccessoryImage: (req, res) => {
    accessoryUpload(req,res,function(err){
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
      }else{
        return res.json(accessories);
      }
    })
  },
  get3Accessories: (req, res) => {
    Accessory.find({}).limit(3).exec((err, accessories) => {
      if(err){
      }else{
        return res.json(accessories);
      }
    })
  },
// ACCESSORY ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// FILTER METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  getExpensiveAccessories: (req, res) => {
    Accessory.find({}).sort('-price').exec((err, accessories) => {
      if(err){
      }else{
        return res.json(accessories);
      }
    })
  },
  getCheapestAccessories: (req, res) => {
    Accessory.find({}).sort('+price').exec((err, accessories) => {
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
      }else{
        return res.json(accessories);
      }
    })
  },
  // BIKES *****************************
  // UPLOAD \/ \/\ \/ \/ \/ \/ \/ \/ \/
  addBikeImage: (req, res) => {
    bikeUpload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }else{
      res.json(req.file.filename);
    }
  })
},
  addBike: (req, res) => {
    var bike = new Bike(req.body);
    bike.save((err, bike) => {
      if(err){
      }else{
        return;
      }
    })
  },
  getAllBikes: (req, res) => {
    Bike.find({}, (err, bikes) => {
      if(err){
      }else{
        return res.json(bikes);
      }
    })
  },
  get3Bikes: (req, res) => {
    Bike.find({}).limit(3).exec((err, bike) => {
      if(err){
      }else{
        return res.json(bike);
      }
    })
  },
// Bike ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// FILTER METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  getExpensiveBikes: (req, res) => {
    Bike.find({}).sort('-price').exec((err, bikes) => {
      if(err){
      }else{
        return res.json(bikes);
      }
    })
  },
  getCheapestBikes: (req, res) => {
    Bike.find({}).sort('+price').exec((err, bikes) => {
      if(err){
      }else{
        return res.json(bikes);
      }
    })
  },
  getPopularBikes: (req, res) => {
    Bike.find({}).sort('-bought').exec((err, bikes) => {
      if(err){
      }else{
        return res.json(accessories);
      }
    })
  },
  getLimitedBikes: (req, res) => {
    Bike.find({limited: true}, (err, bikes) => {
      if(err){
      }else{
        return res.json(bikes);
      }
    })
  },
// EVENT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  addEventImage: (req, res) => {
    eventUpload(req,res,function(err){
      if(err){
        res.json({error_code:1,err_desc:err});
        return;
      }else{
        // CONSOLE.LOG REQ.FILE
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
      }else{
        return res.json(event);
      }
    })
  },
  getEvent: (req, res) => {
    Event.findOne({_id: req.params.id}, (err, event) =>{
      if(err){
      }else{
        return res.json(event);
      }
    })
  },
// CART ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  getCart: (req, res) => {
    if(!req.session.cart){
      req.session.cart =[];
    }
    return res.json(req.session.cart);
  },
  addItem: (req, res) => {
    if(req.params.type == 'accessory'){
      Accessory.find({_id: req.body.id}, (err, accessory) => {
        if(err){
        }else{
          if(req.session.cart.length > 0){
            for(var i = 0; i < req.session.cart.length; i++){
              if(req.session.cart[i]._id == req.params.id){
                req.session.cart[i].quantity ++;
                req.session.save();
                var added = true;
              }
            }
            if(!added){
              accessory[0].quantity = 1;
              req.session.cart.push(accessory[0]);
              req.session.save();
              return res.json({success: true});
            }
          }else{
            accessory[0].quantity = 1;
            req.session.cart.push(accessory[0]);
            req.session.save();
            return res.json({success: true});
          }
        }
      })
    }
    else if(req.params.type == 'apparel'){
      Apparel.find({_id: req.body.id}, (err, apparel) => {
        if(err){
        }else{
          if(req.session.cart.length > 0){
            for(var i = 0; i < req.session.cart.length; i++){
              if(req.session.cart[i]._id == req.params.id){
                req.session.cart[i].quantity ++;
                req.session.save();
                var added = true;
              }
            }
            if(!added){
              apparel[0].quantity = 1;
              req.session.cart.push(apparel[0]);
              req.session.save();
              return res.json({success: true});
            }
          }else{
            apparel[0].quantity = 1;
            req.session.cart.push(apparel[0]);
            req.session.save();
            return res.json({success: true});
          }
        }
      })
    }
    else if(req.params.type == 'bike'){
      Bike.find({_id: req.body.id}, (err, bike) => {
        if(err){
        }else{
          if(req.session.cart.length > 0){
            for(var i = 0; i < req.session.cart.length; i++){
              if(req.session.cart[i]._id == req.params.id){
                req.session.cart[i].quantity ++;
                req.session.save();
                var added = true;
              }
            }
            if(!added){
              bike[0].quantity = 1;
              req.session.cart.push(bike[0]);
              req.session.save();
              return res.json({success: true});
            }
          }else{
            bike[0].quantity = 1;
            req.session.cart.push(bike[0]);
            req.session.save();
            return res.json({success: true});
          }
        }
      })
    }
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
  },
  addApparelImg: (req, res) => {
    apparelUpload(req, res, function(err) {
      if(err){
        res.json({error_code:1,err_desc:err});
        return;
      }
      res.json(req.file.filename);
    });
  },
  addApparel: (req,res)=> {
    let newApparel = new Apparel(req.body);
    newApparel.image = req.body.path;
    console.log(req.body);
    newApparel.save((err,savedAppar)=>{
      if(err){
        console.log("Error saving apparel");
      } else {
        res.json(savedAppar);
      }
    })
  },
  getAllApparel: (req,res) => {
    Apparel.find({}, (err, apparels) => {
      if(err){
          return res.sendStatus(500);
      } else {
          return res.json(apparels);
      }
    })
  },
  getApparel: (req, res) => {
    Apparel.findOne({_id: req.params.id}, (err, current_apparel) => {
      if(err){
          console.log(err);
          return res.sendStatus(500);
      } else {
          return res.json(current_apparel);
      }
    })
  },
  getExpensiveApparel: (req, res) => {
    Apparel.find({}).sort('-cost').exec((err, apparel) => {
      if(err){
      }else{
        return res.json(apparel);
      }
    })
  },
  getCheapestApparel: (req, res) => {
    Apparel.find({}).sort('+cost').exec((err, apparel) => {
      if(err){
      }else{
        return res.json(apparel);
      }
    })
  },
  getPopularApparel: (req, res) => {
    Apparel.find({}).sort('-bought').exec((err, apparel) => {
      if(err){
      }else{
        return res.json(apparel);
      }
    })
  },
  getLimitedApparel: (req, res) => {
    Apparel.find({limited: true}, (err, apparel) => {
      if(err){
        console.log(err);
      }else{
        return res.json(apparel);
      }
    })
  },
}
