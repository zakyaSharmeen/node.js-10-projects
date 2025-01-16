const UserModel = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


class UserController{
    static userRegistration = async(req, res) =>{
        const {name, email, password, password_confirmation, tc} = req.body
        const user = await UserModel.findOne({email: email})
        if(user){
            res.send({"status": "failed", "messgae": "Email already exists"})
        }else{
            if(name && email && password && password_confirmation && tc){
                if(password === password_confirmation){
                    try{
                        const salt = await bcrypt.genSalt(10)
                        const hashPassword = await  bcrypt.hash(password,salt)
                    const doc = new UserModel({
                        name: name,
                        email:email,
                        password:hashPassword,
                        tc:tc
                    })
                     await doc.save()
                     const saved_user = await UserModel.findOne({email: email})
                    //  generating token
                    const token = jwt.sign({userId: saved_user._id},
                    process.env.JWT_SECRET_KEY,{expiresIn:"5d"})
                     res.status(201).send({"status": "succeed", "message": "Registered", "token":token})


                    }catch(error){
                        console.log(error.message);
                        res.send({"status": "failed", "message": "unable to register"})

                    }
 
                }else{
                    res.send({"status": "failed", "message": "password && password_confirmation doesnot match"})

                }

            }else{
                res.send({"status": "failed", "message": "All fields are required"})
            }
        }
    }

    static userLogic = async(req, res) =>{
        try{
            const {email, password} = req.body
            if(email && password){
                const user = await UserModel.findOne({email:email})
                if(user != null){
                    const isMatch = await bcrypt.compare(password, user.password)
                    if((user.email === email) && isMatch){
                        const token = jwt.sign({userId: user._id},
                            process.env.JWT_SECRET_KEY,{expiresIn:"5d"})
                        res.send({"status": "success", "message": "You Loged Inn", "token": token})


                    }else{
                        res.send({"status": "failed", "message": "you are not registered user"})

                    }

                }else{
                    res.send({"status": "failed", "message": "you are not registered user"})

                }

            }else{
                res.send({"status": "failed", "message": "one of it is wrong"})
            }

        }catch(err){
            console.log(err);
            res.status(202).send({"status": "failed", "message": "cant log in"})


            


        }
    }

    static changeUserPassword = async(req, res)=>{
        const{password, password_confirmation} = req.body
        if(password && password_confirmation ){
            if(password !== password_confirmation){
                res.send({"status": "failed", "message": "new Password  and confirm new password is not equal"})

            }else{
                const salt = await bcrypt.genSalt(10)
                const newHashPassword = await bcrypt.hash(password, salt)
                // console.log(req.user);
                await UserModel.findByIdAndUpdate(req.user._id, {
                    $set:{password: newHashPassword}
                })
                
                res.send({"status": "success", "message": "password changed succesfully"})
            }
        }else{
            res.send({"status": "failed", "message": "All Fields are Required"})
        }
    }

    static loggedUser = async (req, res) =>{
        res.send({"user": req.user})
    }

    static sendUserPasswordResetEmail = async (req, res) =>{
        const {email} = req.body
        if(email){
            const user = await UserModel.findOne({email: email})
            if(user){
                const secret = user._id + process.env.JWT_SECRET_KEY
                const token = jwt.sign({userId: user._id}, secret,{
                    expiresIn: '15m'
                })
                const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
                console.log(link);
                res.send({"status":"success", "message": "Password reset email sent... check ur email"})


                

            }else{
                res.send({"status":"failed", "message": "Email doesnt exists"})

            }

        }else{
            res.send({"status":"failed", "message": "Email Field is required"})

        }
    }

    static userPasswordReset = async (req, res) =>{
        const {password, password_confirmation} = req.body
        const {id, token} = req.params
        const user = await UserModel.findById(id)
        const new_secret = user._id + process.env.JWT_SECRET_KEY

        try{
            jwt.verify(token, new_secret)
            if(password && password_confirmation){
                if(password !== password_confirmation){
                    res.send({"status": "failed", "message": "New password and conirm password is not matched"})


                }else{
                    const salt = await bcrypt.genSalt(10)
                const newHashPassword = await bcrypt.hash(password, salt)
                // console.log(req.user);
                await UserModel.findByIdAndUpdate(user._id, {
                    $set:{password: newHashPassword}
                })
                
                res.send({"status": "success", "message": "Password Reset successfully"})


                }

            }else{
                res.send({"status": "failed", "message": "All fileds are required"})

            }

        }catch(err){
            console.log(err);
            res.send({"status": "failed", "message": "Invalid Token"})
            
        }
    }



}
module.exports = UserController