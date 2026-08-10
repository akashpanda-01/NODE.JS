const express = require("express");
const connectDB = require("./config/database.js");
const server = express();
const User = require("./models/user.js");

server.use(express.json());

server.post("/signup", async (req, res) => {
  // console.log(req.body);
  // const userObj = {
  //   firstName: "Virat",
  //   lastName: "Kohli",
  //   age: "38",
  // };
  const user = new User(req.body);

  try {
    await user.save();
    res.send("Data Added..");
  } catch (error) {
    res.status(401).send("Got Error :" + error.message);
  }
});

// Get User By Name
server.get("/user", async (req, res) => {
  const name = req.body.firstName;
  try {
    const user = await User.findOne({ firstName: name });
    res.send(user);
  } catch (error) {
    res.status(400).send("Something Went Wrong..");
  }
});

// Get All The Users or documents from our Database
server.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      res.send("Users Not Found");
    } else {
      res.send(users);
    }
  } catch (error) {
    res.status(400).send("Something Went Wrong");
  }
});

// Delete a User Document
server.delete("/deleteUser", async (req, res) => {
  console.log("DELETE API HIT");
  const request = req.body.firstName;
  try {
    const deleteUser = await User.deleteOne({ firstName: request });
    if (deleteUser) {
      const allUsers = await User.find({});
      res.send(allUsers);
    }
  } catch (error) {
    res.status(401).send("Not Deleted");
  }
});

server.patch("/updateUser", async (req, res) => {
  const userId = req.body.userId;
  const updateReq = req.body;
  try {
    const user = await User.findByIdAndUpdate(userId, updateReq, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send(user);
  } catch (error) {
    res.status(400).send("Not Updated");
    console.log(error.message);
  }
});

connectDB()
  .then(() => {
    console.log("Connected...");
    server.listen(3000, () => {
      console.log("Server Listening...");
    });
  })
  .catch((error) => {
    console.log("Not Connected");
  });
