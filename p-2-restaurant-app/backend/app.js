const express = require("express")
const cors = require("cors")
const dbConnection = require("./databse/dbConnection")
const { errorMiddleware } = require("./error/error")
const reservationRouter = require("./router/reserveRoute")

PORT = 8000
FRONTEND_URL = "http://localhost:3000"



const app = express()
app.use(cors(
    {origin: [FRONTEND_URL],
        methods: ["POST"],
        credentials: true,}
))
app.use(express.json())


dbConnection()
app.use(errorMiddleware)
app.use("/api/v1/reservation",reservationRouter)


app.listen(PORT, ()=> console.log("server started at port 8000")
)