const express = require("express")
const sendReservation = require("../controller/reservation")

const router = express.Router()

router.post("/send", sendReservation)

module.exports = router