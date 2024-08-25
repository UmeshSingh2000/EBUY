const express = require('express')
const router = express.Router();
const productModel = require('../models/productModel')

router.get('/topArrival', async (req, res) => {
    try { const products = await productModel.find().sort({ _id: -1 }).limit(3);
       
        const topArrival = products.map(product => {
            return {
                ...product.toObject(),
                image: product.image.toString('base64')  // Convert buffer to base64 string
            };
        });
        res.json(topArrival);

    } catch (err) {
        res.status(500).send("An error occurred while retrieving the products");
    }
})
module.exports = router;