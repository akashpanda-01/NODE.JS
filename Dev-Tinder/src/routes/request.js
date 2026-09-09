const express = require("express");
const { userAuth } = require("../auth.js");
const ConnectionRequest = require("../models/connectionRequest.js");
const validateRequestData = require("../utils/validation.js");
const User = require("../models/user.js");

const requestRouter = express.Router();

requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      validateRequestData(req);

      const toUser = await User.findById(toUserId);
      if(!toUser){
        return res.status(400).json({message: "User not Found"});
      };

      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
            {fromUserId, toUserId},
            {fromUserId: toUserId, toUserId: fromUserId},
        ]
      });

      if (existingConnectionRequest){
        return res.status(400).send("Connection Request Already Exists ")
      };

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();

      res.json({ message: "Connection Request Sent Successfully", data });
    } catch (err) {
      res.status(400).send("ERROR" + err.message);
    }
  },
);

module.exports = { requestRouter };
