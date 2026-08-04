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
  const userName = req.body.firstName;
  try {
    const users = await User.find({ firstName: userName });
    res.send(users);
  } catch (error) {
    res.status(401).send(error);
  }
});

server.get("/feed", async (req, res) => {
  try {
    const userFeed = await User.find({});
    res.send(userFeed);
  } catch (error) {
    res.status(401).send("Error");
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
