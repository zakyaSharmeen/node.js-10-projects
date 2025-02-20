const express = require("express");
const mongoDB = require("./db");
const app = express();
const cors = require("cors");

const UserRoute = require("./Routes/CreateUser")

const port = 5000;

app.use(cors());

mongoDB();
app.get("/", (req, res) => {
  res.send(
    "hello zakya u r ggod extremely ggood just need to improve little bit of communicatoon"
  );
});


app.use(express.json());

app.use("/api", UserRoute);

app.listen(port, () => {
  console.log("====================================");
  console.log(`server started at port ${port}`);
  console.log("====================================");
});
