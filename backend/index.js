const express = require("express");
const server = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

server.use(
  session({
    secret: "wee",
    resave: false,
    key: "test",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
  })
);
server.use(cookieParser());
server.use(passport.initialize());
server.use(passport.session());
require("./passport");
server.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"]
  })
);
server.use(express.json());

server.get("/", (req, res) => {
  res.send("hello world");
});
server.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"], failureRedirect: "/" })
);
server.get("/google/callback", passport.authenticate("google"), function(
  req,
  res
) {
  res.redirect("/me");
});
server.get("/me", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.json({ profile: req.user });
  } else {
    res.json({ message: "not authenticated" });
  }
});

server.listen(4000, () => {
  console.log("server is listening on port 4000");
});
