const express = require('express')
const app = express();
require('dotenv').config()
const cors = require('cors');
const dbConnect = require("./config/dbConnection")
dbConnect()
const adminRoute = require('./Routes/adminRoute')
app.use(express.json());
app.use(cors())
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.use('/admin',adminRoute);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})