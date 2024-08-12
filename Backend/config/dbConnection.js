const mongoose = require('mongoose')
require('dotenv').config()
const dbConnect= async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Database");
    }
    catch(err){
        console.log(err)
    }
}
module.exports=dbConnect;