var controllers = require('./../controllers/controller.js');

module.exports=(app)=>{
  // ACCESSORY 1) adds image 2) adds Accessory in DB 3) gets all images
  app.post("/accessoryupload", controllers.addAccessoryImage);
  app.post("/api/addAccessory", controllers.addAccessory);
  app.get("/api/getAllAccessories", controllers.getAllAccessories);
  app.post("/eventupload", controllers.addEventImage);
  app.post("/addEvent", controllers.addEvent);
  app.get("/api/getAllEvents", controllers.getAllEvents);
  app.get("/api/getEvent/:id", controllers.getEvent);
  app.get("/api/getCart", controllers.getCart);
  app.get("/api/removeItem/:id", controllers.removeItem);
  app.get("/api/clearCart", controllers.clearCart);
  app.get("/api/addItem/:id", controllers.addItem);
  app.get('/api/getExpensiveAccessories', controllers.getExpensiveAccessories);
  app.get('/api/getCheapestAccessories', controllers.getCheapestAccessories);
  app.get('/api/getPopularAccessories', controllers.getPopularAccessories);
  app.get('/api/getLimitedAccesories', controllers.getLimitedAccesories);
  app.post('/api/apparelupload', controllers.addApparelImg);
  app.post('/api/addapparel', controllers.addApparel);
  app.get('/api/allapparel', controllers.getAllApparel);
  app.get('/api/apparel/show/:id', controllers.getApparel);

}
