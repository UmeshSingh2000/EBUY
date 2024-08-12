const mongoose = require('mongoose')
const  Schema  = mongoose.Schema;

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
})

const adminModel = mongoose.model('Admin',adminSchema,"Admin")
module.exports = adminModel;