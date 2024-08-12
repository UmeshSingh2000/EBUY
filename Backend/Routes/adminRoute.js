const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const adminModel = require('../models/adminModel')
router.post('/create', async (req, res) => {
    try {
        const findAdmin = await adminModel.find();
        if (findAdmin.length >= 1) {
            return res.status(502).send("Cannot create a new admin already created!");
        }
        const { name, email, password } = req.body;
        const admin = new adminModel({
            name,
            password: await bcrypt.hash(password, 10),
            email,
        })
        await admin.save();
        console.log(name);

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
        res.status(200).send("Admin logged in");
    }
    catch(err){
        res.status(500).send('Error logging in');
    }

})

module.exports = router;