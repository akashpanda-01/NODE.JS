const express = require("express");
const { connectDB } = require("./config/database.js");
const User = require("./models/user.js");
const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Radhe",
    lastName: "Krishna",
    email: "radhekrishna@gmail.com",
  };

  const user = new User(userObj);
  await user.save();
  res.send("Saved SuccessFully....");
});

connectDB()
  .then(() => {
    console.log("Connected SuccessFully...");
    app.listen(3000, () => {
      console.log("Server Is Listening....");
    });
  })
  .catch((err) => {
    console.log("Not Connected.. ${err}");
  });
