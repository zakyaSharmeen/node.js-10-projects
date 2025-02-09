const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

const router = express.Router();

// route for registration
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already excits" });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = new userModel({
      email,
      password: hashPassword,
    });

    const savedUser = await newUser.save();
    const token = jwt.sign(
      {
        id: savedUser._id,
      },

      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({ token, msg: "user registered successfully" });
  } catch (err) {
    console.log(err);
    console.log("====================================");
    res.status(500).send("server error");
  }
});

// route for login
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({ mssg: "Invalid credentials" });
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if(isMatch){
        const payload = {
            id: user._id,
            email: user.email
        }
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
           { expiresIn: 3600},
           (error, token)=>{
            if(error) throw error;
            res.json({
                token,
                user: {id:user._id, email: user.email}

            })
           
           }
        )
      }else{
        console.error(err)
        res.status(500).send("server error")
      }
  
     
      
    } catch (err) {
      console.log(err);
      console.log("====================================");
      res.status(500).send("server error");
    }
  });

const authRouter = router
  module.exports = authRouter
