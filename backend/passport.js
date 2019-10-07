const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
passport.serializeUser(function(user, done) {
  console.log("serialize", user._json.picture);
  return done(null, user);
});
passport.deserializeUser(function(user, done) {
  console.log("deserialize");
  return done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "722082763077-7aeuur9nh3vi9c2srce6n41s81vo6d0j.apps.googleusercontent.com",
      clientSecret: "3_S-JjI1TWwHxuV6f9udSR4_",
      callbackURL: "http://localhost:4000/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      cb(null, profile);
    }
  )
);
