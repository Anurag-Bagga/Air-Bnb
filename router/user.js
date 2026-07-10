const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../util/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controller/user.js");
const user = require("../models/user.js");

router.route("/signup")
  .get(userController.signupRender)
  .post(wrapAsync(userController.signUp));

router.route("/login")
  .get(userController.loginRender)
  .post(
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),userController.login);

router.get("/logout",userController.logout);

module.exports = router;