const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type:String, required:true
    },
    email: {
        type:String, required:true, unique: true
    },
    age: {
        type:Number
    },
   
},
{timestamps: true},


)
const User = mongoose.model("MernUser", userSchema)
module.exports = User