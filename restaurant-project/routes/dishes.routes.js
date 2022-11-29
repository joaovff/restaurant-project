const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

router.get("/dishes/create", isLoggedIn, (req, res, next) => {
  try {
    res.render("dishes/dish-create");
  } catch (error) {
    next(error);
  }
});

router.post("/dishes/create", isLoggedIn, async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, image, ingredients, type } = req.body;
    const createdDish = await Dish.create({
      name,
      image,
      ingredients,
      type,
    });
    console.log("A new dish was created", createdDish);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/dishes/starters", async (req, res, next) => {
  try {
    const starterDishes = await Dish.find({ type: "starter" });
    res.render("dishes/starters", { dish: starterDishes });
  } catch (error) {
    next(error);
  }
});
router.get("/dishes/mains", async (req, res, next) => {
  try {
    const mainDishes = await Dish.find({ type: "main" });
    res.render("dishes/mains", { dish: mainDishes });
  } catch (error) {
    next(error);
  }
});
router.get("/dishes/desserts", async (req, res, next) => {
  try {
    const dessertDishes = await Dish.find({ type: "dessert" });
    res.render("dishes/desserts", { dish: dessertDishes });
  } catch (error) {
    next(error);
  }
});

router.get("/dishes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const dish = await Dish.findById(id);
    res.render("dishes/dish-details", dish);
  } catch (error) {
    next(error);
  }
});

router.get("/dishes/:id/edit", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    
    res.render("dishes/dish-edit", dish);
  } catch (error) {
    next(error);
  }
});

router.post("/dishes/:id/edit", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, image, ingredients, type } = req.body;
    const updateDish = await Dish.findByIdAndUpdate(id, {
      name,
      image,
      ingredients,
      type,
    });
    res.redirect(`/`);
  } catch (error) {
    next(error);
  }
});

router.post("/dishes/:id/delete", isLoggedIn, async (req, res, next) => {
  try {
    const { id } = req.params;
    await Dish.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/dishes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const dish = await Dish.findById(id);
    res.render("dishes/dish-details", dish);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
