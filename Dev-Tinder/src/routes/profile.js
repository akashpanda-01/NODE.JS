const express = require("express");
const { userAuth } = require("../auth.js");
const profileRouter = express.Router();
const {
  validateEditProfileData,
  validateProfilePassword,
} = require("../utils/validation.js");
const bcrypt = require("bcrypt");

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
    if (validateProfilePassword(req)) {
      const requestPassword = req.body;
      const newPasswordHash = await bcrypt.hash(requestPassword, 5);
      if (!newPasswordHash) {
        throw new Error("Password Not Hashed");
      }
      const userPasswordHash = user.password;
      userPasswordHash = newPasswordHash;
      await userPasswordHash.save();
      res.send("Password Updated..");

      // const isPasswordValid = await user.validatePassword(requestPassword);
      // if(isPasswordValid){
      //     const userPasswordHash = user.password;

      // }
    } else {
      throw new Error("Password Not Valid");
    }
  } catch (err) {
    throw new Error("Something Went Wrong " + err.message);
  }
});

module.exports = {
  profileRouter,
};
