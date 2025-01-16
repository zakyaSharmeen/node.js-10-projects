const jwt = require("jsonwebtoken")
const UserModel = require("../models/User")

var checkUserAuth = async(req, res, next) =>{
    let token 

    const {authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try{
            // get token from header
            token = authorization.split(" ")[1]
            // console.log("Token", token);
            // console.log("Authorization", authorization);

            

            // verify token
             const {userId} = jwt.verify(token, process.env.JWT_SECRET_KEY)

            //  get user from token
            req.user = await UserModel.findById(userId).select('-password')
            next()

        }catch(err){
            console.log(err.messgae);
            res.status(401).send({"status": "failed", "message": "unauthorised user"})
            
        }
    }
    if(!token){
        res.status(401).send({"status": "failed", "message": "unauthorised user, No token found"})
    }
}
module.exports = checkUserAuth