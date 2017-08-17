var controllers = require('./../controllers/controller.js');

module.exports=(app)=>{
  app.post("/accessoryupload", controllers.addAccessoryImage);
  app.post("/api/addAccessory", controllers.addAccessory);
  app.get("/api/getAllAccessories", controllers.getAllAccessories);
  app.post('/api/apparelupload', controllers.addApparelImg);
  app.post('/api/addapparel', controllers.addApparel);
  app.get('/api/allapparel', controllers.getAllApparel);
  app.get('/api/apparel/show/:id', controllers.getApparel);
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
