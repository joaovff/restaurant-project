const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const Dish = require("../models/Dish.model");

router.get("/manager", isLoggedIn, async (req, res, next) => {
  const dishes = await Dish.find();
  res.render("manager/manager-area", { dish: dishes });
});

module.exports = router;
