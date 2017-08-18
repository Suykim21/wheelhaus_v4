var controllers = require('./../controllers/controller.js');

module.exports=(app)=>{
  // ACCESSORY 1) adds image 2) adds Accessory in DB 3) gets all images
  app.post("/accessoryupload", controllers.addAccessoryImage);
  app.post("/api/addAccessory", controllers.addAccessory);
  app.get("/api/getAllAccessories", controllers.getAllAccessories);
  app.post("/eventupload", controllers.addEventImage);
  app.post("/api/addEvent", controllers.addEvent);
  app.get("/api/getAllEvents", controllers.getAllEvents);
  app.get("/api/getEvent/:id", controllers.getEvent);
  app.get("/api/getCart", controllers.getCart);
  app.get("/api/removeItem/:id", controllers.removeItem);
  // app.post('/api/newcust', controllers.newCustomer);
  // app.get('/api/getusers', controllers.getUsers);
  // app.get('/api/getrecentusers', controllers.getrecentUsers);
  // app.post('/api/newprod', controllers.addProduct);
  // app.get('/api/getprods', controllers.getProds);
  // app.post('/api/neworder', controllers.placeOrder);
  // app.get('/api/getorders', controllers.getOrders);
  // app.get('/api/getrecentorders', controllers.getRecentOrders);
  // app.delete('/api/removeuser/:id', controllers.removeUser);

}
