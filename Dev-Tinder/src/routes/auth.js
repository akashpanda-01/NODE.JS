const express = require("express");
const User = require("../models/user.js");
const { validationSignUpData } = require("../utils/validation.js");
const bcrypt = require("bcrypt");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, emailId, password, gender, skills, about } =
      req.body;
    validationSignUpData(req);

    const passwordHash = await bcrypt.hash(password, 5);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
      gender,
      about,
      skills,
    });

    const token = await user.getJWT();

    if (!token) {
      throw new Error("Not Valid Token");
    }

    await user.save();

    const userIs = await User.findOne({ emailId: emailId });
    if (!userIs) {
      throw new Error("User Not Found");
    }

    res.cookie("token", token);
    res.send("Signup SuccessFully " + userIs);
  } catch (err) {
    throw new Error("Something Went Worng" + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });

    if (!user) {
      throw new Error("Invalid Credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
    
      const token = await user.getJWT();
      if (!token) {
        throw new Error("Invalid Token");
      };

      res.cookie("token", token);
      res.send("Loggin SuccessFull");

    } else {
      throw new Error("Invalid Credentials");
    }
    
  } catch (err) {
    throw new Error("Something went Wrong " + err.message);
  }
});

authRouter.post("/logout", (req, res) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
    })
    .send("Logout Successfully");
});

module.exports = {
  authRouter,
};
