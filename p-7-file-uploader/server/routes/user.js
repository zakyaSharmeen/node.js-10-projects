const express = require("express")
const userController = require("../controllers/user")
const multer = require('multer');
const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `public/upload`)
    },
    filename: function (req, file, cb) {
    //   cb(null, `${Date.now()}-${file.originalname}`)
    cb(null, `${Date.now()}-${file.originalname}`);

    

    }
  })
  
  const upload = multer({ storage: storage })

router.post("/users", upload.single("profile"), userController.createUser)
router.get("/users", userController.getAllUser)
router.delete("/users/:id", userController.deleteUser);




module.exports = router