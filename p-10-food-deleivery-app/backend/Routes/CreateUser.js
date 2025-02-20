const UserModel = require("../models/User");

    const express = require("express")
    const router = express.Router()
    const { body, validationResult } = require('express-validator');


    
    router.post("/createuser",
        body("email", "incorrect email").isEmail(),
        body("name").isLength({min: 5}),
        body("password", "incorrect password").isLength({min: 5})
         ,async (req, res) => {

            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()})
            }



        try {
            // const result = await UserModel.create({
            //     name: "jasmine",
            //     password: "12345",
            //     email: "jasmine@gmail.com",
            //     location: "hjbhhbjnkjnn",
            // });
    

            const result = await UserModel.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                location: req.body.location,
            });
            console.log("User created successfully:", result);
            res.json({ success: true });
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
            if( req.body.password !== userData.password){
                return res.status(400).json({
                    error: "TRy login with correct credentials"
                })
            }
            
    

           return res.json({success: true})
        } catch (err) {
            console.log("Error occurred during login creation:");
            console.log(err.message);
            res.json({ success: false });
        }
    });
    

    module.exports = router