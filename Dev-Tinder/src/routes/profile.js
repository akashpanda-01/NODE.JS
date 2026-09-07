const express = require("express");
const { userAuth } = require("../auth.js");
const profileRouter = express.Router();
const {
  validateEditProfileData,
  validateProfilePassword,
} = require("../utils/validation.js");
const bcrypt = require("bcrypt");
const validator = require("validator");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if (!validateEditProfileData) {
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;

    Object.keys(req.body).forEach((key) => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();

    res.json({
      message: `${loggedInUser.firstName}, Your Data Updated SuccessFully`,
      Data: loggedInUser,
    });
  } catch (err) {
    res.status(400).send("Something went Wrong " + err.message);
  }
});



profileRouter.patch("/profile/password", userAuth, async (req, res) => {
  try {
    const user = req.user;

    validateProfilePassword(req);

    const { currentPassword, newPassword } = req.body;

    const isCurrentPasswordValid = await user.validatePassword(currentPassword);

    if(!isCurrentPasswordValid){
      throw new Error("Current Password is Incorrect");
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 5);

    if(!validator.isStrongPassword(newPassword)){
      throw new Error("New password is not strong enough");
    };

    if (!newPasswordHash) {
      throw new Error("Password Not Hashed");
    }

    user.password = newPasswordHash;
    
    await user.save();

    res.send("Password Updated..");

  } catch (err) {
    res.status(400).send("Something Went Wrong " + err.message);
  }
});

module.exports = {
  profileRouter,
};
