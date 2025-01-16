const express = require("express")
const router = express.Router()
const UserController = require("../controllers/useControllers")
const checkUserAuth = require("../middlewares/auth-middleware")

// route level middleware
router.use("/changepassword",checkUserAuth)
router.use("/loggeduser", checkUserAuth)

// public route
router.post("/register", UserController.userRegistration)
router.post("/login",UserController.userLogic )
router.post("/send-reset-password-email", UserController.sendUserPasswordResetEmail)
router.post("/reset-password/:id/:token", UserController.userPasswordReset)


// protected route
router.post("/changepassword",UserController.changeUserPassword )
router.get("/loggeduser", UserController.loggedUser)

module.exports = router


