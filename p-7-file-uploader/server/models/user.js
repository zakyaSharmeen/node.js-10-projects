const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email: {
        type:String

    },
    age: {
        type:Number

    },
    profile: {
        type:String

    },

},{
    timestamps: true
})

const userModel = mongoose.model("uploaders", userSchema)
module.exports = userModel