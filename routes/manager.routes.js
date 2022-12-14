const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const isLoggedOut = require("../middleware/isLoggedOut");
const Dish = require("../models/Dish.model");
const Rating = require("../models/Rating.model");
const fileUploader = require("../config/cloudinary.config");

// Rendering Manager Area Home page
router.get("/manager", isLoggedIn, (req, res, next) => {
   try {
      const { user } = req.session.currentUser;
      res.render("manager/manager-index", user);
   } catch (error) {
      next(error);
   }
});

// Rendering Dish Create
router.get("/manager/create", isLoggedIn, (req, res, next) => {
   try {
      res.render("manager/manager-create");
   } catch (error) {
      next(error);
   }
});

// Posting the created dish
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

// Rendering the reviews average (canvas)
router.get("/manager/ratings-average", isLoggedIn, async (req, res, next) => {
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

// Rendering the comments
router.get("/manager/comments", isLoggedIn, async (req, res, next) => {
   const dishes = await Dish.find().populate("rating");
   const myDishes = dishes.map((dish) => {
      const { name, image, ingredients, price } = dish;
      const comments = dish.rating.map(item => {
        return item.comment;
     });
     return comments
   });
   res.render("manager/manager-comments", {
      dish: myDishes,
   });
});

// Rendering the edit dish list
router.get("/manager/edit", isLoggedIn, async (req, res, next) => {
   try {
      const dishes = await Dish.find();
      res.render("manager/manager-edit", { dish: dishes });
   } catch (error) {
      next(error);
   }
});

// Rendering the dish being edited
router.get("/manager/edit/:id", isLoggedIn, async (req, res, next) => {
   try {
      const { id } = req.params;
      const dish = await Dish.findById(id);
      res.render("manager/manager-details", dish);
   } catch (error) {
      next(error);
   }
});

// Posting the dish update
router.post(
   "/manager/edit/:id",
   fileUploader.single("image"),
   isLoggedIn,
   async (req, res, next) => {
      try {
         const { id } = req.params;
         const { name, ingredients, type, price } = req.body;
         const item = { name, ingredients, type, price };
         if (req.file) {
            item.image = req.file.path;
         }
         const updateDish = await Dish.findByIdAndUpdate(id, item);
         res.redirect("/manager/edit");
      } catch (error) {
         next(error);
      }
   }
);

// Post to delete a dish
router.post("/manager/delete/:id", isLoggedIn, async (req, res, next) => {
   try {
      const { id } = req.params;
      await Dish.findByIdAndDelete(id);
      res.redirect("/manager/edit");
   } catch (error) {
      next(error);
   }
});

module.exports = router;
