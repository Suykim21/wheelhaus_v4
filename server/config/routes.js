var controllers = require('./../controllers/controller.js');

module.exports=(app)=>{;
  // Cart ***** routes
  app.get("/api/getCart", controllers.getCart);
  app.get("/api/removeItem/:id", controllers.removeItem);
  app.get("/api/clearCart", controllers.clearCart);
  app.post("/api/addItem/:type", controllers.addItem);
  app.get("/api/plusItem/:id", controllers.plusItem);
  app.get("/api/minusItem/:id", controllers.minusItem);
  app.get("/api/getEachCost/:id", controllers.getEachCost);
  //  Bike Routes *****
  app.post("/bikeupload", controllers.addBikeImage);
  app.post("/api/addBike", controllers.addBike);
  app.get("/api/getAllBikes", controllers.getAllBikes);
  app.get('/api/bikes/show/:id', controllers.getBike);
  // Apparel Routes
  app.post('/api/apparelupload', controllers.addApparelImg);
  app.post('/api/addapparel', controllers.addApparel);
  app.get('/api/allapparel', controllers.getAllApparel);
  app.get('/api/apparel/show/:id', controllers.getApparel);
  // Info Routes
  app.post('/api/addInfo', controllers.addInfo);
}
