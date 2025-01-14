const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name shoulbe atleast three alphabet"],
    maxLength: [30, "this should be not more than 30"],
  },

  lastName: {
    type: String,
    required: true,
    minLength: [3, " name shoulbe atleast three alphabet"],
    maxLength: [30, "this should be not more than 30"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide valid email"]
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "number should be 10"],
    maxLength: [10, "number should be 10"],
  },
  time: {
    type:String, required: true
  },
  date: {
    type:String, required: true
  }

});

const Reservation = mongoose.model("Reservation", reservationSchema)

module.exports = Reservation