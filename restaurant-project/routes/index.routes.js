const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish.model");
const { all } = require("./dishes.routes");

/* GET home page */
router.get("/", async (req, res, next) => {
  try {
    const allDishes = await Dish.find();
    res.render("index", { dishes: allDishes });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
