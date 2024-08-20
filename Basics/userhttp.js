var http=require('http');
var userModule=require('./user.js')
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/json'});
    if(req.method=='POST' && req.url=='/register'){
        req.on('data',(chunk)=>{
            user=JSON.parse(chunk);
        })
        req.on('end',()=>{
            res.end(userModule.adduser(user))
        })
    }
    else if(req.method=='POST' && req.url=='/login'){
        req.on('data',(chunk)=>{
            user=JSON.parse(chunk);
        }) 
    req.on('end',()=>{
        res.end(userModule.checklogin(user.username,user.password));
    })
}
})
const port=4000;
server.listen(port,()=>{
    console.log(`Server is running at port http://localhost:${port}`);
})
