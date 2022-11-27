const { Schema, model } = require("mongoose");

const dishSchema = new Schema(
  {
    name: String,
    image: String,
    ingredients: String,
    type: {
      type: String,
      enum: ["starter", "main", "dessert"],
    },
  },
  {
    timestamps: true,
  }
);

const Dish = model("Dish", dishSchema);

module.exports = Dish;
