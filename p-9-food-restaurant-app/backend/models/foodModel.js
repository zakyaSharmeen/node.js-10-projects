const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  priceInCents: { type: Number, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model("Food", foodSchema);
