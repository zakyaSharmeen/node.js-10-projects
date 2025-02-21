    const express = require("express")
    const router = express.Router()

    router.post("/foodData", (req, res) =>{
        try{
            // console.log(global.food);
            // console.log(global.foodCategory);

            res.send([global.food, global.foodCategory])

        }catch(err){
            console.error(err.message);
            res.send("Server error")
        }
    })



module.exports = router
