//http module
var http=require('http') //importing http form server of node js
var server=http.createServer((req,res)=>{ //to create server
    res.writeHead(200,{'content-type':'text/json'});
    //res.end('Hello World\n');
    if(req.method=='GET'&&req.url=='/greet'){
        res.end('Hello welcome')
    }
    else if(req.method=='GET'&& req.url=='/date'){
        res.end(new Date().toString())
    }
    else if(req.method=='GET'&& req.url=='/users'){
        res.end('')
    }
})
const port=3000;
server.listen(port,()=>{
    console.log(`Server is running at port http://localhost:${port}`);
})
