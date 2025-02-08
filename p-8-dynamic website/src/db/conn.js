

    const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dynamicWebsite", {
  
})
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error:", err));
