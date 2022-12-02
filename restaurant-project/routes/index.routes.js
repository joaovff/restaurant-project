const express = require("express");
const router = express.Router();
const Dish = require("../models/Dish.model");
const { all } = require("./dishes.routes");
const nodemailer = require("nodemailer");

router.post("/send-mail", async (req, res, next) => {
  const { name, email, date, people, time } = req.body;

  let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "97631978183395",
      pass: "1a97c4d3122f37",
    },
  });
  let message = {
    from: "noreplay@idea.pt",
    to: "books@idea.pt",
    subject: `Reservation for:${date},${time}`,
    text: `Name: ${name}, Email: ${email}, Table for: ${people} Date:${date}, Time:${time}`,
    html: "<p>HTML version of the message</p>",
  };

  transport.sendMail(message, (err) => {
    if (err) {
      return res.status(404).json({
        erro: true,
        message: "Failed to send the email!",
      });
    } else {
      res.redirect("/");
    }
  });
});

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
