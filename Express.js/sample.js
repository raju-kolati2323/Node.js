var express=require('express')
var app=express()
// app.all('/',(req,res,next)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html','text/json')
// });
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/style',(req,res)=>{
    res.send('<h1 style=color:red;>Hello</h1>')
})
app.get('/products',(req,res)=>{
    res.send('Products')
})
app.get('/home',(req,res)=>{
    res.send('Home')
}
);
const port=3000;
app.listen(port,()=>{
    console.log(`Server port is: http://localhost:${port}`)
})