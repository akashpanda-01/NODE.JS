const express = require("express");
const connectDB = require("./config/database.js");
const server = express();
const User = require("./models/user.js");

server.post("/signup", (req, res) => {
  const userObj = {
    firstName: "Virat",
    lastName: "Kohli",
    age: "38",
  };

  const user = new User(userObj);

  user.save();

  res.send("Data Added..");
});

connectDB().then(() => {
  console.log("Connected...");
  server.listen(3000, () => {
    console.log("Server Listening...");
  });
}) .catch((error) => {
  console.log("Not Connected");
});