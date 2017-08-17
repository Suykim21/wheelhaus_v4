let mongoose = require('mongoose');
// var User = mongoose.model('User');
// var Product = mongoose.model('Product');
var Accessory = mongoose.model('Accessory');
// var Order = mongoose.model('Order');
// var MongoClient = require('mongodb').MongoClient;
var Apparel = mongoose.model('Apparel');

// FOR FILE UPLOADS
var fs = require('fs');
var multer = require("multer");
// ACCESSORY FILE UPLOAD
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

// APPAREL FILE UPLOAD
var apparelStorage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './public/dist/assets/apparel');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
    }
});
var apparelUpload = multer({ //multer settings
                storage: apparelStorage
            }).single('file');


module.exports = {
  addAccessoryImage: (req, res) => {
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


}
