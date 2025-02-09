const express = require("express");
const { config } = require("dotenv");
const mongoose = require("mongoose");
const foodRoute = require("./routes/foodRoutes");
const authRouter = require("./controllers/authController");
const auth = require("./middleware/authMiddleware")
const cors = require("cors");




config();
const app = express();

mongoose .connect(process.env.mongoDB)
.then(() => console.log("DATABSE CONNECTED SUCCESSFULLY"))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.json())
app.use("/food", foodRoute)

app.use('/auth', authRouter)
app.use(auth)

app.listen(process.env.PORT, () => {
  console.log("====================================");
  console.log(`Server started at PORT-5000`);
  console.log("====================================");
});

