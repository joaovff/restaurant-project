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
      price: Number,
      rating: [
         {
            type: Schema.Types.ObjectId,
            ref: "Rating",
         },
      ],
   },
   {
      timestamps: true,
   }
);

const Dish = model("Dish", dishSchema);

module.exports = Dish;
