var controllers = require('./../controllers/controller.js');

module.exports=(app)=>{
  // EVENT ***** routes. 1st two are to upload image/add event to db
  app.post("/eventupload", controllers.addEventImage);
  app.post("/addEvent", controllers.addEvent);
  app.get("/api/getAllEvents", controllers.getAllEvents);
  app.get("/api/getEvent/:id", controllers.getEvent);
  // Cart ***** routes
  app.get("/api/getCart", controllers.getCart);
  app.get("/api/removeItem/:id", controllers.removeItem);
  app.get("/api/clearCart", controllers.clearCart);
  app.post("/api/addItem/:type", controllers.addItem);
  // Accessory Routes ***** 1st two are to upload image/add accessory to db
  app.post("/accessoryupload", controllers.addAccessoryImage);
  app.post("/api/addAccessory", controllers.addAccessory);
  app.get("/api/getAllAccessories", controllers.getAllAccessories);
  app.get('/api/accessories/show/:id', controllers.getAccessory);
  app.get("/api/get3Accessories", controllers.get3Accessories);
  // Accessory Filters *****
  app.get('/api/getExpensiveAccessories', controllers.getExpensiveAccessories);
  app.get('/api/getCheapestAccessories', controllers.getCheapestAccessories);
  app.get('/api/getPopularAccessories', controllers.getPopularAccessories);
  app.get('/api/getLimitedAccesories', controllers.getLimitedAccesories);
  //  Bike Routes *****
  app.post("/bikeupload", controllers.addBikeImage);
  app.post("/api/addBike", controllers.addBike);
  app.get("/api/getAllBikes", controllers.getAllBikes);
  app.get('/api/bikes/show/:id', controllers.getBike);
  app.get("/api/get3Bikes", controllers.get3Bikes);
  // Bike Filters *****
  app.get("/api/getExpensiveBikes", controllers.getExpensiveBikes);
  app.get("/api/getCheapestBikes", controllers.getCheapestBikes);
  app.get("/api/getPopularBikes", controllers.getPopularBikes);
  app.get("/api/getLimitedBikes", controllers.getLimitedBikes);
  // Apparel Routes
  app.post('/api/apparelupload', controllers.addApparelImg);
  app.post('/api/addapparel', controllers.addApparel);
  app.get('/api/allapparel', controllers.getAllApparel);
  app.get('/api/apparel/show/:id', controllers.getApparel);
  app.get("/api/get3Apparel", controllers.get3Apparel);
  // Apparel Filters
  app.get('/api/getExpensiveApparel', controllers.getExpensiveApparel);
  app.get('/api/getCheapestApparel', controllers.getCheapestApparel);
  app.get('/api/getPopularApparel', controllers.getPopularApparel);
  app.get('/api/getLimitedApparel', controllers.getLimitedApparel);

}
