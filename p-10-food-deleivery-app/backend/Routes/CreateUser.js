const UserModel = require("../models/User");

    const express = require("express")
    const router = express.Router()
    const { body, validationResult } = require('express-validator');
    const bcrypt = require("bcrypt")
    const jwt = require("jsonwebtoken")
    const jwtSecret = "Mynameiszakuhhhhsharnebhbhhbh" 



    
    router.post("/createuser",
        body("email", "incorrect email").isEmail(),
        body("name").isLength({min: 5}),
        body("password", "incorrect password").isLength({min: 5})
         ,async (req, res) => {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()})
            }

            const salt = await bcrypt.genSalt(10)
            const secPassword = await bcrypt.hash(req.body.password, salt)


        try {
            // const result = await UserModel.create({
            //     name: "jasmine",
            //     password: "12345",
            //     email: "jasmine@gmail.com",
            //     location: "hjbhhbjnkjnn",
            // });
    

            const result = await UserModel.create({
                name: req.body.name,
                password: secPassword,
                email: req.body.email,
                location: req.body.location,
            });
            console.log("User created successfully:", result);
            res.json({ success: true , result});
        } catch (err) {
            console.log("Error occurred during user creation:");
            console.log(err.message);
            res.json({ success: false });
        }
    });





    // login
    router.post("/loginuser",
        body("email").isEmail(),
        body("password").isLength({min: 5})
         ,async (req, res) => {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()})
            }

            let email = req.body.email

        try {
            let userData = await UserModel.findOne({email})
            if(!userData){
                return res.status(400).json({
                    error: "TRy login with correct credentials"
                })
            }

            const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
            if( !pwdCompare){
                return res.status(400).json({
                    error: "TRy login with correct credentials"
                })
            }
            const data = {
                user: {
                    id: userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
            return res.json({success: true, authToken: authToken})
    

        } catch (err) {
            console.log("Error occurred during login creation:");
            console.log(err.message);
            res.json({ success: false });
        }
    });
    

    module.exports = router