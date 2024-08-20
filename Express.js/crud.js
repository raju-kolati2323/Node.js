var express=require('express')
var bodyparser=require('body-parser');//automatic type coversions
var products=require('./products.js')
var app=express(); //server to express (inbuilt)
app.use(bodyparser.json())// helps posting data in express.js
app.all('/',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/json');
})
app.get("/products",(req,res)=>{
    res.send(products.getproducts())
})
app.post("/products",(req,res)=>{
    res.send(products.addproduct(req.body))
})
app.delete("/deleteall",(req,res)=>{
    res.send(products.deleteall());
})
app.get("/products/:id",(req,res)=>{
    var id=req.params.id;
    res.send(products.getproductById(id))
})
app.delete("/products/:id",(req,res)=>{
    var id=req.params.id;
    res.send(products.deleteproduct(id))
})
app.put("/products/:id",(req,res)=>{
    var id=req.params.id;
    res.send(products.updateproduct(id,req.body))
})

const port=4300;
app.listen(port,()=>{
    console.log(`Server is running at port http://localhost:${port}`)
})