const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 25,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
      min: 18,
      max: 50,
    },
    emailId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid Email Address");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value){
        if(!validator.isStrongPassword(value)){
          throw new Error("Enter A Strong Password "+value);
        }
      }
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Not Valid");
        }
      },
    },
    skills: {
      type: [String],
    },
    about: {
      type: String,
      default: "About Of The User",
    },
  },
  {
    timestamps: true,
  },
);

userSchema.methods.getJWT = async function(){
  const user = this;
  const token = await jwt.sign({_id: user._id}, "DevTinder@123", {expiresIn: "1d"});
  return token;
};

userSchema.methods.validatePassword = async function(userInputPassword){
  const user = this;
  const passwordHash = user.password;

  const isPasswordValid = await bcrypt.compare(userInputPassword, passwordHash);

  return isPasswordValid;
  
};

const User = mongoose.model("User", userSchema);
module.exports = User;
