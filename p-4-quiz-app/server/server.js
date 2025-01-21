const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { config } = require("dotenv");
const router = require("./router/router");
const  connect  = require("./databse/conn");
const PORT = process.env.PORT || 5000
config();


const app = express();


app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use("/api", router)
// connect();



app.use("/", (req, res) => {
  res.json("get response");
});



// app.listen(`${PORT}`, console.log("server strated at 8000"));

connect().then(()=>{
    try{
        app.listen(`${PORT}`, console.log(`${PORT}`));



    }catch(err){
        console.log("cannot connect to the server");
        
    }

}).catch(err => {console.log("invalid databse");
})
