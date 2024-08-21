const express = require('express')
const router = express.Router();
const productModel = require('../models/productModel');
const multer = require('multer')


const storage = multer.memoryStorage();
const upload = multer({storage:storage})

router.post('/newProduct',upload.single('image'),async (req,res)=>{
    try{
        const {productName,price,discount,productDescription,gender} =req.body;
        const image = req.file.buffer
        const imageType = req.filemimetype;
        const product = new productModel({
            productName,
            price,
            discount,
            productDescription,
            image,
            imageType,
            gender
        })
        await product.save()
        res.status(200).send("product created")
    }
    catch(err){
        res.status(500).send("An error occurred while creating the product");
    }
})
module.exports = router