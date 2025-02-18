

const express = require("express");
const { default: orderModel } = require("../models/orderModel");

const router = express.Router();

// fetching all orders
router.get("/", async (req, res) => {
  const orders = await orderModel.find();
  res.json(orders);
});

// fetching single order
router.get("/:id", async (req, res) => {
  const orders = await orderModel.findById(req.params.id);
  res.json(orders);
});

// update single order
router.put("/:id", async (req, res) => {
    const updateOrders = await orderModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    res.json(updateOrders);
});

// delete single order
router.delete("/:id", async (req, res) => {
    const deleteOrders = await orderModel.findByIdAndDelete(req.params.id);
    res.json(deleteOrders);
});  

// Exporting the router correctly
module.exports = router;
