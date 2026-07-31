const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://akash_db:zsA7KyhcGmyV54Q0@nodelearningdev.6wdrxxd.mongodb.net/",
  );
};

module.exports = {
    connectDB,
};