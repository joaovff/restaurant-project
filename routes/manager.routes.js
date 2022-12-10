const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const Dish = require("../models/Dish.model");
const Rating = require("../models/Rating.model");
const fileUploader = require("../config/cloudinary.config");

router.get("/manager/create", isLoggedIn, (req, res, next) => {
  try {
    res.render("manager/manager-create");
  } catch (error) {
    next(error);
  }
});

router.post(
  "/manager/create",
  fileUploader.single("image"),
  isLoggedIn,
  async (req, res, next) => {
    try {
      const { name, image, ingredients, type, price } = req.body;
      const dish = { name, ingredients, type, price };
      if (req.file) {
        dish.image = req.file.path;
      }
      const newDish = await Dish.create(dish);
      res.redirect("/manager/edit");
    } catch (error) {
      next(error);
    }
  }
);

router.get("/manager-stars", isLoggedIn, async (req, res, next) => {
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

  res.render("manager/manager-stars", {
    dish: JSON.stringify(myDishes),
  });
});

router.get("/manager/comments", isLoggedIn, async (req, res, next) => {
  const dishes = await Dish.find().populate("rating");
  console.log(...dishes)

  res.render("manager/manager-comments", {
    dish: JSON.stringify(dishes),
  });
});

router.get("/manager/edit", isLoggedIn, async (req, res, next) => {
  try {
    const dishes = await Dish.find();
    res.render("manager/manager-edit", { dish: dishes });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
