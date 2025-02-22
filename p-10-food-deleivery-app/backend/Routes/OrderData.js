

const express = require("express");
const OrderModel = require("../models/Orders");

const router = express.Router();

router.post("/orderData", async (req, res) => {
  try {
    // Valdte input
    if (!req.body.email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!req.body.order_data || !Array.isArray(req.body.order_data) || req.body.order_data.length === 0) {
      return res.status(400).json({ error: "Order data must be a non-empty array" });
    }

    let data = [...req.body.order_data];  

    let existingOrder = await OrderModel.findOne({ email: req.body.email });

    if (!existingOrder) {
      await OrderModel.create({
        email: req.body.email,
        order_data: [data], 
      });

      return res.status(200).json({ success: true });
    } else {
      await OrderModel.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }  
      );

      return res.status(200).json({ success: true });
    }
  } catch (err) {
    console.error("Error:", err.message);
    return res.status(500).json({ success: false, error: "Server error", message: err.message });
  }
});

router.post("/myorderData", async(req, res)=>{
  try{
    let myData = await OrderModel.findOne({
      "email": req.body.email
    })
    return res.status(200).json({ orderData: myData });



  }catch(err){
    res.send("server Error", err.message)

  }
})





module.exports = router;
