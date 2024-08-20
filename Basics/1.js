let he=()=>{console.log('Welcome')};
he();

var rect={
    perimeter:(a,b)=>console.log(2*(a+b)),
    area:(a,b)=>console.log(a*b),
}
function calc(x,y){
    rect.perimeter(x,y),
    rect.area(x,y);
}
calc(4,5)
//file based module
function hello(){
    console.log('Hello World')
}
hello()
module.exports=calc

//core module--path module
var path=require('path');
var propath=path.parse(__filename);
var propath1=path.basename(__filename);
var propath2=path.basename(__dirname);
console.log(propath)
console.log(propath1)
console.log(propath2)

//core module--os module
var os=require('os')
console.log(os.homedir())
console.log(os.version())   
console.log(os.hostname())

//core module-file system module
//readdirsync
var fs=require('fs')
console.log(fs.readdirSync('./'))
//ex1 readfilesync
try{
    const data=(fs.readFileSync('./sample.txt','utf-8'));
    console.log(data);
}
catch(e){
    console.log(e)
}
//ex2 writefile
const content="full stack"
fs.writeFile('./mean.txt',content,err=>{
    if(err){console.log(err)}
    else{
        console.log('Written')
    }
})

