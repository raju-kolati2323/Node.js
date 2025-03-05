var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var productSchema=new Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
})
var Product=mongoose.model('Products',productSchema);
module.exports=Product;