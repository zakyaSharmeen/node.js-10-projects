const mongoose = require('mongoose');
const validator = require("validator")

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
    minlength:3
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    unique: true,
    trim: true,
    lowercase: true,
    validator(value){
        if(!validator.isEmail(value)){
            throw new Error("invalid email id")
        }
    }
    


  
  },
 
  phone: {
    type: Number,
    required: [true, 'Please enter your phone number'],
    min: 10,
  },
  message: {
    type: String,
    required: [true, 'Please enter your message'],
    min: 3,
  },
}, {
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

const User = module.exports = mongoose.model('user', UserSchema);
module.exports = User