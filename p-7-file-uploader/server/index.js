const express = require("express")
const connectToDb = require("./config/db")
const cors = require("cors")
const userRouter = require("./routes/user")

const app = express()

app.use(cors())
app.use(express.json())

app.use(express.static("public/upload"))
app.get("/", (req, res)=>{
    res.send("u r doing good")
})

app.use("/api/v1", userRouter)

connectToDb()
app.listen(9000, ()=>{
    console.log("server runnninh at port -9000");
    

})