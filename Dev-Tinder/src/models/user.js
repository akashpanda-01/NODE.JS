const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    validate(value){
      if(!["male", "female", "others"].includes(value)){
        throw new Error("Not Valid");
      };
    }
  },
  skills: {
    type: [String]
  },
  about: {
    type: String,
    default: "About Of The User",
  }
},
{
  timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;
