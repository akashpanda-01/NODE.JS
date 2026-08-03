const express = require("express");
const connectDB = require("./config/database.js");
const server = express();
const User = require("./models/user.js");

server.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    age: "38",
  };
  const user = new User(userObj);

  try {
    await user.save();
    res.send("Data Added..");
  } catch (error) {
    res.status(401).send("Got Error :" + error.message);
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
