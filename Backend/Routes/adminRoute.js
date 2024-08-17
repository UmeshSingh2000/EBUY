const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const adminModel = require('../models/adminModel')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key'
router.post('/create', async (req, res) => {
    try {
        const findAdmin = await adminModel.find();
        if (findAdmin.length >= 1) {
            return res.status(409).send("Cannot create a new admin already created!");
        }
        const { name, email, password } = req.body;
        const admin = new adminModel({
            name,
            password: await bcrypt.hash(password, 10),
            email,
        })
        await admin.save();
        res.status(201).send(admin)
    }
    catch (err) {
        res.status(500).send('Error creating admin');
    }
})
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(404).send("Admin not found");
        }
        const passMatch = await bcrypt.compare(password, admin.password)
        if (!passMatch) {
            return res.status(400).send('Invalid Credentials')
        }
        const token = jwt.sign(
            {id: admin._id,email:admin.email},
            JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.status(200).send({message:"Admin logged in",token});
        
    }
    catch(err){
        res.status(500).send('Error logging in');
    }

})

module.exports = router;