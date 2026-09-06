const jwt = require("jsonwebtoken");
const User = require("./models/user.js");

const userAuth = async (req, res, next) => {
  try {
    const {token} = req.cookies;
    if(!token){
      throw new Error("Invalid Token Please Login");
    };
    const decoddedMessage = await jwt.verify(token, "DevTinder@123");
    if(!decoddedMessage){
      throw new Error("Token Not Verified");
    };
    const {_id} = decoddedMessage;
    const user = await User.findById(_id);
    if(!user){
      throw new Error("User Not Found");
    };
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Something Went Wrong "+ err.message);
  };
};

// const adminAuth = (req, res, next) => {
//     const token = "xyz";
//     const isAuth = token === "xyz";
//     if(!isAuth){
//         res.status(401).send("Unauthorized");
//     } else {
//         next();
//     };
// };

// const userAuth = (req, res, next) => {
//     const token = "xyz";
//     const isAuth = token === "xyz";
//     if(!isAuth){
//         res.status(401).send("Unauthorized");
//     } else {
//         next();
//     };
// };

module.exports = {
  // adminAuth,
  userAuth,
};
