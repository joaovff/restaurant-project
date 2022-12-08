const { Schema, model } = require("mongoose");

const ratingSchema = new Schema(
   {
      stars: Number,
      average: Number,
      goodComments: [String],
      badComments: [String],
   },
   {
      timestamps: true,
   }
);

const Rating = model("Rating", ratingSchema);

module.exports = Rating;
