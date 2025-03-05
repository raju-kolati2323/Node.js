


var http=require('http');
var express=require('express');
var app=express()

var productModule=require('./product.js')
var server=http.createServer((req,res)=>{ 
    res.writeHead(200,{'content-type':'text/json'});
   
   //GET METHOD
    if(req.method=='GET'&&req.url=='/products'){
        res.end(JSON.stringify(productModule.getproducts()))
    }

    //POST METHOD
    else if(req.method=='POST'&&req.url=='/products'){
        req.on('data',(chunk)=>{
            product=JSON.parse(chunk);
        })
        req.on('end',()=>{
            res.end(productModule.postproduct(product));
        })
    }

    //DELETE METHOD
    else if(req.method=='DELETE' && req.url.startsWith('/products/')){
        var id=req.url.split('/')[2];
        var index=productModule.getproducts().findIndex((product)=>product.id==id);
        if(index==-1){
            res.end('Product not found')
        }
        else{
            productModule.deleteproduct(index);
            res.end('Product deleted successfully')
        }
    }

    //UPDATE METHOD
    else if(req.method=='PUT'&& req.url.startsWith('/products')){
        var id=req.url.split('/')[2]
        var index=productModule.getproducts().findIndex((product)=>product.id==id);
        if(index==-1){
            res.end('Product not found')
        }
        else{
            req.on('data',(chunk)=>{
                product=JSON.parse(chunk);
            })
            req.on('end',()=>{
                productModule.updateproduct(index,product);
                res.end('Product updated successfully')
            })
        }
    }
    
})
const port=3000;
server.listen(port,()=>{
    console.log(`Server is running at port http://localhost:${port}`);
})