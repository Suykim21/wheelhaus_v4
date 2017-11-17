let mongoose = require('mongoose');
var Info = mongoose.model('Info');
var Bike = mongoose.model('Bike');
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
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});
var apparelUpload = multer({ //multer settings
  storage: apparelStorage
}).single('file');

// DECLARING BIKE-STORE FILE UPLOAD VARIABLE
var bikeStorage = multer.diskStorage({ //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, './public/src/assets/bikes_images');
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
  }
});
var bikeUpload = multer({ //multer settings
  storage: bikeStorage
}).single('file');

module.exports = {
  addInfo: (req, res) =>{
    var info = new Info(req.body);
    // the save function takes a callback which has two arguments
    // Argument #1 -> Errors that the db is ending back if it has a problem saving
    // Argument#2 => the instance of the object we just saved
    info.save((err, savedInfo) =>{
      if(err){
        console.log(err);
        return res.status(500).send("Error saving info");
      } else{
        return res.json(savedInfo);
      }
    })
  },
  addAccessoryImage: (req, res) => {
    accessoryUpload(req, res, function (err) {
      if (err) {
        res.json({
          error_code: 1,
          err_desc: err
        });
        return;
      } else {
        res.json(req.file.filename);
      }
    })
  },
  addAccessory: (req, res) => {
    var accessory = new Accessory(req.body);
    accessory.save((err, accessory) => {
      if (err) {} else {
        return;
      }
    })
  },
  getAllAccessories: (req, res) => {
    Accessory.find({}, (err, accessories) => {
      if (err) {} else {
        return res.json(accessories);
      }
    })
  },
  getAccessory: (req, res) => {
    Accessory.findOne({
      _id: req.params.id
    }, (err, current_accessory) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(current_accessory);
      }
    })
  },
  // get3Accessories: (req, res) => {
  //   Accessory.find({}).limit(3).exec((err, accessories) => {
  //     if(err){
  //     }else{
  //       return res.json(accessories);
  //     }
  //   })
  // },

  // BIKES *****************************
  // UPLOAD \/ \/\ \/ \/ \/ \/ \/ \/ \/
  addBikeImage: (req, res) => {
    bikeUpload(req, res, function (err) {
      if (err) {
        res.json({
          error_code: 1,
          err_desc: err
        });
        return;
      } else {
        res.json(req.file.filename);
      }
    })
  },
  addBike: (req, res) => {
    var bike = new Bike(req.body);
    bike.save((err, bike) => {
      if (err) {} else {
        return;
      }
    })
  },
  getAllBikes: (req, res) => {
    Bike.find({}, (err, bikes) => {
      if (err) {} else {
        return res.json(bikes);
      }
    })
  },
  getBike: (req, res) => {
    Bike.findOne({
      _id: req.params.id
    }, (err, current_bike) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(current_bike);
      }
    })
  },
  // get3Bikes: (req, res) => {
  //   Bike.find({}).limit(3).exec((err, bike) => {
  //     if(err){
  //     }else{
  //       return res.json(bike);
  //     }
  //   })
  // },


  // CART ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // METHODS \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/ \/
  getCart: (req, res) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }
    return res.json(req.session.cart);
  },
  addItem: (req, res) => {
    if (req.params.type == 'apparel') {
      Apparel.find({
        _id: req.body.id
      }, (err, apparel) => {
        if (err) {} else {
          if (req.session.cart.length > 0) {
            for (var i = 0; i < req.session.cart.length; i++) {
              if (req.session.cart[i]._id == req.body.id) {
                req.session.cart[i].quantity++;
                req.session.save();
                var added = true;
                return res.json({
                  success: true
                });
              }
            }
            if (!added) {
              apparel[0].quantity = 1;
              req.session.cart.push(apparel[0]);
              req.session.save();
              return res.json({
                success: true
              });
            }
          } else {
            apparel[0].quantity = 1;
            req.session.cart.push(apparel[0]);
            req.session.save();
            return res.json({
              success: true
            });
          }
        }
      })
    } else if (req.params.type == 'bike') {
      Bike.find({
        _id: req.body.id
      }, (err, bike) => {
        if (err) {} else {
          if (req.session.cart.length > 0) {
            for (var i = 0; i < req.session.cart.length; i++) {
              if (req.session.cart[i]._id == req.body.id) {
                req.session.cart[i].quantity++;
                req.session.save();
                var added = true;
                return res.json({
                  success: true
                });
              }
            }
            if (!added) {
              bike[0].quantity = 1;
              req.session.cart.push(bike[0]);
              req.session.save();
              return res.json({
                success: true
              });
            }
          } else {
            bike[0].quantity = 1;
            req.session.cart.push(bike[0]);
            req.session.save();
            return res.json({
              success: true
            });
          }
        }
      })
    }
  },
  removeItem: (req, res) => {
    for (var i = 0; i < req.session.cart.length; i++) {
      if (req.session.cart[i]._id == req.params.id) {
        req.session.cart.splice(i, 1);
      }
    }
    req.session.save();
    return res.json(req.session.cart);
  },

  plusItem:(req, res) => {
    for(var i = 0; i< req.session.cart.length; i++){
      if(req.session.cart[i]._id == req.params.id){
        req.session.cart[i].quantity++;
      }
    }
    req.session.save();
    return res.json(req.session.cart)
  },

  minusItem:(req,res) => {
    for(var i = 0; i<req.session.cart.length; i++){
      if(req.session.cart[i]._id == req.params.id){
        if(req.session.cart[i].quantity > 1){
          req.session.cart[i].quantity--;
        }else{
          // DELETE ITEM IF QTY === 0 AFTER DECREMENT
          req.session.cart.splice(i, 1);
        }
      }
    }
    req.session.save();
    // PRINT WHAT THE CART LOOKS LIKE AFTER DECREMENT
    console.log(req.session.cart);
    return res.json(req.session.cart)
  },

  getEachCost:(req,res) =>{
    for(var i = 0; i<req.session.cart.length; i++){
      if(req.session.cart[i]._id == req.params.id){
        return res.json(item);
      }
      else{
        console.log("error at controller.js getEachCost");
      }
    }
  },

  clearCart: (req, res) => {
    req.session.cart = [];
    req.session.save();
    return res.json(req.session.cart);
  },
  addApparelImg: (req, res) => {
    apparelUpload(req, res, function (err) {
      if (err) {
        res.json({
          error_code: 1,
          err_desc: err
        });
        return;
      }
      res.json(req.file.filename);
    });
  },
  addApparel: (req, res) => {
    let newApparel = new Apparel(req.body);
    newApparel.image = req.body.path;
    console.log(req.body);
    newApparel.save((err, savedAppar) => {
      if (err) {
        console.log("Error saving apparel");
      } else {
        res.json(savedAppar);
      }
    })
  },
  getAllApparel: (req, res) => {
    Apparel.find({}, (err, apparels) => {
      if (err) {
        return res.sendStatus(500);
      } else {
        return res.json(apparels);
      }
    })
  },
  getApparel: (req, res) => {
    Apparel.findOne({
      _id: req.params.id
    }, (err, current_apparel) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        return res.json(current_apparel);
      }
    })
  },
  // get3Apparel: (req, res) => {
  //   Apparel.find({}).limit(3).exec((err, apparel) => {
  //     if(err){
  //     }else{
  //       return res.json(apparel);
  //     }
  //   })
  // },
}
