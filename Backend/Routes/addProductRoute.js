const express = require('express')
const router = express.Router();
const productModel = require('../models/productModel');
const multer = require('multer')


const storage = multer.memoryStorage();
const upload = multer({ storage: storage })

router.post('/newProduct', upload.single('image'), async (req, res) => {
    try {
        const { productName, price, discount, productDescription, gender,sizes,tags } = req.body;
        if (!productName) return res.status(400).json({ message: 'Product name is required' });
        if (!price || isNaN(price)) return res.status(400).json({ message: 'Price is required and must be a number' });
        if (!discount || isNaN(discount)) return res.status(400).json({ message: 'Discount is required and must be a number' });
        if (!productDescription) return res.status(400).json({ message: 'Product description is required' });
        if (!gender) return res.status(400).json({ message: 'Gender is required' });
        if (!req.file) return res.status(400).json({ message: 'Product image is required' });
        if(!sizes) return res.status(400).json({message:'Specify the Size for the Product'});
        if(!tags) return res.status(400).json({message:'Add tag'})

        const image = req.file.buffer
        
        const imageType = req.file.mimetype;
        const product = new productModel({
            productName,
            price,
            discount,
            productDescription,
            image,
            imageType,
            gender,
            sizes,
            tags
        })
        await product.save()
        res.status(200).send("product created")
    }
    catch (err) {
        res.status(500).send("An error occurred while creating the product");
    }
})
module.exports = router