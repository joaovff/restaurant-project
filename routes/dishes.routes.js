const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish.model");
const Rating = require("../models/Rating.model");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const fileUploader = require("../config/cloudinary.config");
const { none } = require("../config/cloudinary.config");


// Rendering Starters
router.get("/dishes/starters", async (req, res, next) => {
   try {
      const starterDishes = await Dish.find({ type: "starter" });
      res.render("dishes/starters", { dish: starterDishes });
   } catch (error) {
      next(error);
   }
});

// Rendering Mains
router.get("/dishes/mains", async (req, res, next) => {
   try {
      const mainDishes = await Dish.find({ type: "main" });
      res.render("dishes/mains", { dish: mainDishes });
   } catch (error) {
      next(error);
   }
});

// Rendering Desserts
router.get("/dishes/desserts", async (req, res, next) => {
   try {
      const dessertDishes = await Dish.find({ type: "dessert" });
      res.render("dishes/desserts", { dish: dessertDishes });
   } catch (error) {
      next(error);
   }
});

// Rendering Dish Details
router.get("/dishes/:id", async (req, res, next) => {
   try {
      const { id } = req.params;
      const dishes = await Dish.findById(id)
      const dish = await Dish.findById(id).populate("rating");
      const average =
         Math.floor(
            (dish.rating.reduce((accumulator, currentValue) => {
               return accumulator + currentValue.stars;
            }, 0) /
               dish.rating.length) *
               10
         ) / 10;

      console.log("average", average);
      res.render("dishes/dish-details", {
         dish: dishes,
         average: average,
         length: dish.rating.length,
      });
   } catch (error) {
      next(error);
   }
});

// Geting the reviews
router.post("/dishes/:id", async (req, res, next) => {
   try {
      const { id } = req.params;
      const { stars, comment } = req.body;
      const review = { stars, comment};
      const postReview = await Rating.create(review);      
      await Dish.findByIdAndUpdate(id, {
        $push: { rating: postReview._id },
      });

      setTimeout(() => {
         res.redirect("/");
      }, 1000);
   } catch (error) {
      next(error);
   }
});

module.exports = router;
