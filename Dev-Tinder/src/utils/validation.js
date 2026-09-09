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
  const { newPassword, currentPassword } = req.body;

  if (!currentPassword) {
    throw new Error("Current Password is required");
  }

  if (!newPassword) {
    throw new Error("New Password is required");
  }

  if (!validator.isStrongPassword(newPassword)) {
    throw new Error("Not a Valid or Strong Password or emailId");
  }
  return true;
};

const validateRequestData = (req) => {
  const fromUserId = req.user._id;
  const toUserId = req.params.toUserId;
  const status = req.params.status;

  if(!fromUserId || !toUserId){
    throw new Error("Not Find toUserId or fromUserId");
  };

  const allowedStatus = ["ignore", "intrested"];

  if(!allowedStatus.includes(status)){
    return res.status(400).json({message: "Invalid Status Type "+ status});
  };


};
module.exports = {
  validationSignUpData,
  validateEditProfileData,
  validateProfilePassword,
};
