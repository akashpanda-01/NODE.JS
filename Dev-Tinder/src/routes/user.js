const express = require("express");
const { userAuth } = require("../auth");
const userRouter = express.Router();
const ConnectionRequest = require("../models/connectionRequest");

userRouter.get("/user/requests/recived", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    console.log(loggedInUser);
    const connectionRequests = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", ["firstName", "lastName"]);    

    res.json({
      message: "Request Fetched Successfully",
      data: connectionRequests,
    });
  } catch (err) {
    // console.log(err.message);
    res
      .status(404)
      .json({ message: "Something Went Wrong", error: err.message });
  }
});

module.exports = {
  userRouter,
};
