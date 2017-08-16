// Retrieve
// var MongoClient = require('mongodb').MongoClient;
// Connect to the db
// MongoClient.connect("mongodb://localhost:27017/wheelhausDB", function(err, db) {
//   if(!err) {
//     console.log("We are connected to the database");
//   } else {
//     console.log("We are having a problem connecting to the DB");
//   }
  // Insert into DB
  // var collection = db.collection('test');
  // var docs = [{mykey:1}, {mykey:2}, {mykey:3}];
  // collection.insert(docs, {w:1}, function(err, result) {});

  // Query DB
  // var stream = collection.find({mykey:{$ne:2}}).stream();
  // stream.on("data", function(item) {
  //   console.log(item)
  // });
  // stream.on("end", function() {});

// });

// Old mongoose setup

var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/wheelhaus');
var models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file) {
  if(file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
