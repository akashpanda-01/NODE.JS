const validator = require("validator");
const { validate } = require("../models/user");

const validationSignUpData = (req) => {
  const { firstName, lastName, emailId, password, age, gender, skills, about } =
    req.body;
  if (!firstName || !lastName) {
    throw new Error("Provide Credentials");
  }
  if (!emailId && !password) {
    throw new Error("Provide EmailId or Password");
  }
  if (!validator.isEmail(emailId)) {
    throw new Error("Please Enter Valid Email Id");
  }
  if (!validator.isStrongPassword(password) && !password) {
    throw new Error("Please Enter Valid Password");
  }
};

const validateEditProfileData = (req) => {
  const ALLOWED_UPDATES = [firstName, lastName, about, gender, age, skills];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    ALLOWED_UPDATES.includes(field),
  );
  return isEditAllowed;
};

const validateProfilePassword = (req) => {
  const password = req.body;
  if(!validate.isEmail(password) && !validate.isStrongPassword(password)){
    throw new Error("Not a Valid or Strong Password");
  };
}
module.exports = {
  validationSignUpData,
  validateEditProfileData,
  validateProfilePassword,
};
