const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const foodRoute = require("./routes/foodRoutes");
const orderRoute = require("./routes/oderRoute");

const authRouter = require("./controllers/authController");
const auth = require("./middleware/authMiddleware")
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const {CloudinaryStorage} = require("multer-storage-cloudinary");
// const { default: Stripe } = require("stripe");
// const { Stripe } = require("stripe");
const stripeRouter = require("./routes/stripeRoute");
const { webhookRouter } = require("./webhooks/webhookHandler");



config();
const app = express();

mongoose .connect(process.env.mongoDB)
.then(() => console.log("DATABSE CONNECTED SUCCESSFULLY"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json())

app.use("/stripe",stripeRouter)
app.use("/food", foodRoute)




app.use('/auth', authRouter)
app.use(auth)


app.use("/order",orderRoute)





cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

app.use((req, res, next)=>{
  req.cloudinary = cloudinary
  next()

})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images",
    allowedFormats: ["jpeg", "png", "jpg"]
  }
})

const parser = multer({storage: storage})

app.post('/upload-image', parser.single('file'),(req, res)=>{
  if(!req.file){
    return res.status(400).send("no file uploaded")
  }
  try{
    if(!req.file.path){
      throw new Error("file uploaded, but no path available")
    }
    res.json({secure_url: req.file.path})

  }catch(err) {
    console.log("Error during the file upload");
    res.status(500).send("internal server error")
    

  }
})


app.get('/userProfile',auth, async(req, res)=>{
  
  try{
    const user = await userModel.findById(req.user.id).select("-password")
    if(!user){
      return res.status(404).json({msg: "User not found"})
    }
   
    res.json(user)

  }catch(err) {
    console.error(err);
    res.status(500).send("server error")
    

  }
})


app.use("webhook", webhookRouter)





app.listen(process.env.PORT, () => {
  console.log("====================================");
  console.log(`Server started at PORT-5000`);
  console.log("====================================");
});

