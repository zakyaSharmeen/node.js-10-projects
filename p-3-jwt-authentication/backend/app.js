const dotenv = require ("dotenv")
dotenv.config()

const express = require("express")
const cors = require("cors")
const connectDB = require("./config/connectdb")
const router = require("./routes/UserRoute")

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())
connectDB(DATABASE_URL)

app.use(express.json())
app.use("/api/user", router)

app.listen(port, ()=>{
    console.log("server started at port-8000");
    
})
