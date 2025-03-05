var express = require('express');
var router = express.Router();
var Product=require('../model/product')
/* GET home page. */
router.post("/product",(req,res)=>{
  var newProduct=new Product(req.body);
  newProduct.save()
  .then(()=>{res.send('Product added')})
  .catch((err)=>{console.log(err)});
});
router.get("/product",(req,res)=>{
  Product.find({})
  .then((product)=>{res.send(product)})
  .catch((err)=>{console.log(err)})
});
router.put('/product/:id',(req,res)=>{
  var id=req.params.id;
  var updatedproduct=req.body;
  Product.findByIdAndUpdate(id,updatedproduct)
  .then(()=>{res.send('Product updated')})
  .catch((err)=>console.log(err))
})
router.delete('/product/:id',(req,res)=>{
  var id=req.params.id;
  Product.findByIdAndDelete(id)
  .then(()=>{res.send('Product deleted')})
  .catch((err)=>{console.log(err)})
})
  router.get('/product/:id',(req,res)=>{
  var id=req.params.id;
  Product.findOne({_id:id})
  .then((product)=>res.send(product))
  .catch((err)=>{console.log(err)})
})
  router.patch('/product/:id',(req,res)=>{
  var id=req.params.id;
  var updatedproduct=req.body;
  Product.findByIdAndUpdate(id,{$set:updatedproduct})
  .then(()=>{res.send('Product updated')})
  .catch((err)=>console.log(err))
})
  router.delete('/product',(req,res)=>{
    Product.deleteMany({})
    .then(()=>{res.send('All products deleted')})
    .catch((err)=>{console.log(err)})
  })

module.exports = router;