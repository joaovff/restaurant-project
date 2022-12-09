const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const Dish = require("../models/Dish.model");
const Rating = require("../models/Rating.model");

router.get("/manager", isLoggedIn, async (req, res, next) => {
  const dishes = await Dish.find().populate("rating");
  const myDishes = dishes.map((dish) => {
    const { name, image, ingredients, price } = dish;
    const sum = dish.rating.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.stars;
    }, 0);
    return {
      name,
      image,
      ingredients,
      price,
      average: sum / dish.rating.length,
    };
  });

  res.render("manager/manager-area", {
    dish: JSON.stringify(myDishes),
  });
});

module.exports = router;
