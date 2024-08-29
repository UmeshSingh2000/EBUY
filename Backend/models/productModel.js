const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: String,
    price: Number,
    discount:Number,
    productDescription:String,
    image:Buffer,
    imageType:String,
    gender:String,
    sizes:String
},{timestamps:true})
const productModel = mongoose.model('Product',productSchema,'Product')
module.exports = productModel;