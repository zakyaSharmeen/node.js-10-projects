const { Router } = require("express");

const router = Router()
const controller = require("../controllers/controller");

// router.get("/questions", (req, res)=>{
//     res.json("question r goooooooooooood")
// })

router.route("/questions")
.get(controller.getQuestions)
.post(controller.insertQuestions)
.delete(controller.dropQuestions)

router.route("/result")
.get(controller.getResult)
.post(controller.storeResult)
.delete(controller.dropResult)


module.exports = router