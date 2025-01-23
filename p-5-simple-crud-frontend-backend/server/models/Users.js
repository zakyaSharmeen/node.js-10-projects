const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema({
    name: String,
    email: String,
    age:Number
})

const UserModel = mongoose.model("users-fd-bds",UserScheme)
module.exports = UserModel