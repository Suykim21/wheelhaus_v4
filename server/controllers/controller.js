let mongoose = require('mongoose');
// var User = mongoose.model('User');
// var Product = mongoose.model('Product');
var Accessory = mongoose.model('Accessory');
// var MongoClient = require('mongodb').MongoClient;

// FOR FILE UPLOADS
var fs = require('fs');
var multer = require("multer");
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

module.exports = {
  addAccessoryImage: (req, res) => {
    upload(req,res,function(err){
    if(err){
      res.json({error_code:1,err_desc:err});
      return;
    }
    res.json(req.file.filename);
    });



  },

  addAccessory: (req, res) => {
    console.log("controller @ addAccessory*************************");
    console.log(req.body);
    var accessory = new Accessory(req.body);
    accessory.save((err, accessory) => {
      if(err){
        console.log(err);
        console.log("******^^^^^^^^^^^ ERR IN CONTROLLER @ addAccessory");
      }else{
        return;
      }
    })
  },

  getAllAccessories: (req, res) => {
    Accessory.find({}, (err, accessories) => {
      if(err){
        console.log(err);
        console.log("**^^^^^^^^^^^^^ ERR IN CONTROLLER @ getAllAccessories")
      }else{
        // console.log(accessories);
        // console.log("****^^^^^^^^^ get all accessories in controller")
        return res.json(accessories);
      }
    })
  }
}
