const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const User = require("./src/models/userMessage")

const port = process.env.PORT || 3000;

// connecting mongodb
require("./src/db/conn");
console.log("====================================");

// // giving location of the files
const staticpath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");

// // middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/js"))
);
app.use(
  "/jq",
  express.static(path.join(__dirname, "node_modules/jquery/dist"))
);

app.use(express.static(staticpath));
app.use(express.json()); // To parse JSON body
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded body (form data)


// to set the hbs
app.set("view engine", "hbs");

// path asigned
app.set("views", templatePath);
hbs.registerPartials(partialPath);


// route
app.get("/", (req, res) => {
  // res.send("hii zaky u r doing great")
  res.render("index");
});
app.get("/thank-you", (req, res) => {
  res.render("thanku"); 
});


app.post("/contact", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }

    const userData = new User(req.body);
    await userData.save();

    // return res.status(200).json({ success: true, message: "Contact sent successfully!" });
    return res.redirect("/thank-you");

  } catch (err) {
    console.error("Error Saving Data:", err);
    
    if (!res.headersSent) {
      return res.status(500).json({ error: "Internal Server Error", details: err });
    }
  }
});





app.listen(port, () => {
  console.log("====================================");
  console.log(`server is running at port ${port}`);
});
