var controllers = require('./../controllers/controller.js');

module.exports=(app)=>{
  // Accessory Routes. 1st two are to upload image/add accessory to db
  app.post("/accessoryupload", controllers.addAccessoryImage);
  app.post("/api/addAccessory", controllers.addAccessory);
  app.get("/api/getAllAccessories", controllers.getAllAccessories);
  // Event routes. 1st two are to upload image/add event to db
  app.post("/eventupload", controllers.addEventImage);
  app.post("/addEvent", controllers.addEvent);
  app.get("/api/getAllEvents", controllers.getAllEvents);
  app.get("/api/getEvent/:id", controllers.getEvent);
  // Cart routes
  app.get("/api/getCart", controllers.getCart);
  app.get("/api/removeItem/:id", controllers.removeItem);
  app.get("/api/clearCart", controllers.clearCart);
  app.post("/api/addItem/:type", controllers.addItem);
  // Accessory Filters
  app.get('/api/getExpensiveAccessories', controllers.getExpensiveAccessories);
  app.get('/api/getCheapestAccessories', controllers.getCheapestAccessories);
  app.get('/api/getPopularAccessories', controllers.getPopularAccessories);
  app.get('/api/getLimitedAccesories', controllers.getLimitedAccesories);
  // app.get('/api/getprods', controllers.getProds);
  // app.post('/api/neworder', controllers.placeOrder);
  // app.get('/api/getorders', controllers.getOrders);
  // app.get('/api/getrecentorders', controllers.getRecentOrders);
  // app.delete('/api/removeuser/:id', controllers.removeUser);

}
