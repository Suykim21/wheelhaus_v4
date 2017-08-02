let mongoose = require('mongoose');
// var User = mongoose.model('User');
// var Product = mongoose.model('Product');
// var Order = mongoose.model('Order');

module.exports = {
  // newCustomer: (req,res)=>{
  //   let newUser = new User({name:req.body.name});
  //   newUser.save((err,savedUser)=>{
  //     if(err){
  //       console.log("Error saving user")
  //     } else {
  //       req.session.user = savedUser;
  //       res.json(savedUser);
  //     }
  //   })
  // },

  // getUsers:(req,res)=>{
  //   User.find({},(err,users)=>{
  //     if(err){
  //       res.sendStatus(500);
  //     } else {
  //       res.json(users);
  //     }
  //   })
  // },

  // addProduct:(req,res)=>{
  //   let newProd = new Product(req.body);
  //   newProd.save((err,savedProd)=>{
  //     if(err){
  //       console.log("Error saving product");
  //     } else {
  //       res.json(savedProd);
  //     }
  //   })
  // },

  // getProds:(req,res)=>{
  //   Product.find({},(err,products)=>{
  //     if(err){
  //       res.sendStatus(500);
  //     } else {
  //       res.json(products);
  //     }
  //   })
  // },

  // placeOrder:(req,res)=>{
  //   User.findOne({name:req.body.name},(err,user)=>{
  //     if(err){
  //       console.log(err)
  //     } else {
  //       let customer_id = user._id;
  //       Product.findOne({name:req.body.product},(err,product)=>{
  //         if(err){
  //           console.log(err);
  //         } else {
  //           let product_id = product._id;
  //           if(product.quantity>req.body.quantity){
  //             product.quantity = product.quantity-req.body.quantity;
  //             product.save((err,updatedProduct)=>{
  //               console.log(updatedProduct)
  //               let newOrder = new Order({_user:customer_id, _product:product_id, quantity:req.body.quantity});
  //               newOrder.save((err,savedOrder)=>{
  //                 if(err){
  //                   console.log(err);
  //                 } else {
  //                   res.json(savedOrder)
  //                 }
  //               })
  //             })
  //           } else {
  //             res.json("Not enough product")
  //           }            
  //         }
  //       })
  //     }
  //   })
  // },

  // getOrders:(req,res)=>{
  //   Order.find({}).populate('_user','name').populate('_product','name').exec((err,orders)=>{
  //     if(err){
  //       res.sendStatus(500);
  //     }else{
  //       res.json(orders);
  //     }
  //   })
  // },

  // removeUser:(req,res)=>{  
  //   User.remove({_id:req.params.id},(err,data)=>{
  //     if(err){
  //       res.sendStatus(400);
  //     } else {
  //       return res.json(data)
  //     }
  //   })
  // },

  // getRecentOrders:(req,res)=>{
  //   Order.find({}).populate('_user','name').populate('_product','name').sort('-createdAt').limit(3).exec((err,orders)=>{
  //     if(err){
  //       res.sendStatus(500);
  //     } else {
  //       res.json(orders)
  //     }
  //   })
  // },

  // getrecentUsers:(req,res)=>{
  //   User.find({}).sort('-createdAt').limit(3).exec((err,users)=>{
  //     if(err){
  //       res.sendStatus(500);
  //     } else {
  //       res.json(users);
  //     }
  //   })
  // },

} 