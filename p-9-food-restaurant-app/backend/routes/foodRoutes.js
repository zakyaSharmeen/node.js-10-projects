// const express = require("express");
// const router = express.Router();

// // Example route
// router.get("/", (req, res) => {
//   res.send("Food API is working!");
// });

// module.exports = router;

const express = require("express");
const foodModel = require("../models/foodModel");
const router = express.Router();

// Example route

router.post("/", async (req, res) => {
  try {
    if (!req.body.name || !req.body.priceInCents || !req.body.image) {
      return res.status(404).send({
        mssg: " All Fields are Required",
      });
    }

    const newFood = {
      name: req.body.name,
      priceInCents: req.body.priceInCents,
      image: req.body.image,
    };

    const food = await foodModel.create(newFood);
    return res.status(200).send(food);
  } catch (err) {
    console.log(err);
    console.log("====================================");
    res.status(400).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const food = await foodModel.find({});
    return res.status(200).json({
      data: food,
    });
  } catch (err) {
    console.log(err);
    console.log("====================================");
    res
      .status(400)
      .send({
        message: ("we didnot get the food from get request", err.message),
      });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await foodModel.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({
        message: "item not found",
      });
    }
    // return res.status(200).json({message: "product deleted successfully"}
    //    )
    return res.status(200).json({
      message: `'${result.name}' deleted successfully`,
      deletedItem: result
    });
  } catch (err) {
    console.log(err);
    console.log("====================================");
    res
      .status(400)
      .send({
        message: ("we didnot get the food from get request", err.message),
      });
  }
});

router.put("/:id", async (req, res) => {
  try {
    if (!req.body.name || !req.body.priceInCents) {
      return res.status(404).send({
        mssg: " All Fields are Required",
      });
    }

    const { id } = req.params;
    const result = await foodModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({ message: "food not found" });
    }

    return res.status(200).send({
      message: "food updated",
    });
  } catch (err) {
    console.log(err);
    console.log("====================================");
    res
      .status(400)
      .send({ message: ("error coming from routes", err.message) });
  }
});

// getting specific id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const food = await foodModel.findById(id);
    return res.status(200).json(food);
  } catch (err) {
    console.log(err);
    console.log("====================================");
    res
      .status(400)
      .send({ message: ("error coming from routes", err.message) });
  }
});

module.exports = router;
