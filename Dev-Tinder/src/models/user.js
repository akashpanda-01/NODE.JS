const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 25,
  },
  lastName: { type: String },
  age: { type: Number },
  emailId: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },

  password: { type: Number, required: true },
  gender: {
    type: String,
    validate(value) {
      if (!["male", "female", "others"].includes(value)) {
        throw new Error("Gender Data Is Not Valid");
      }
    },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
