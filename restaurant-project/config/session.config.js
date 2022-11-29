const session = require("express-session");
const MongooseStore = require("connect-mongo");
const mongoose = require("mongoose");

module.exports = (app) => {
  app.set("trust proxy", 1);
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
      cookie: {
        sameSite: process.env.NODE.ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 600000,
      },
      rolling: true,
      store: MongooseStore.create({
        mongoUrl:
          process.env.MONGODB_URI || "mongodb://localhost/restaurant-project",
      }),
    })
  );
};
