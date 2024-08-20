var userlist=[]
function adduser(user){
   if(user.username !=null){
    let ind=userlist.findIndex((u)=>u.username==user.username);
    if(ind!=-1){
        return "User already exists";
    }
    else{
        userlist.push(user);
        return "User added successfully"
    }
   }
   else{
    return "Enter correct data format"
   }
}
function checklogin(username,password){
    let ind=userlist.findIndex((u)=>u.username==username && u.password==password);
    if(ind!=-1){
        return "Login success"
    }
    else{ return "Login failed"}
}
exports.adduser=adduser;
exports.checklogin=checklogin;