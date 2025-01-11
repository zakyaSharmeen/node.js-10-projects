const express = require("express")
const app = express()
const userRouter = require("./routes/UserRoutes")

const cors = require("cors")
app.use(cors())

app.use(express.json())

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/merndb")
.then(()=>{console.log("connected Databse");
})
.catch((errror) =>{console.log("error", errror);
})
app.use(userRouter)


// // create
// app.post("/", async(req, res)=>{
//     const {name, email, age} = req.body
//     try{
//         const userAdded = await User.create({
//             name: name, email: email, age: age
//         });
//         res.status(201).json(userAdded)
//     }catch(error){
//         console.log(error);
//         res.status(400).json({error: error.message})
        
//     }

// })



// app.get("/", async (req, res)=>{
//     // res.send("hii zaky u did it")
//     try{
//         const showAll = await User.find()
//         res.status(201).json(showAll)
//     }catch(error){
//         console.log(error);
//         res.status(400).json({error: error.message})
        
//     }


// })

app.listen(8000, ()=> console.log("server started at PORT-8000")
)