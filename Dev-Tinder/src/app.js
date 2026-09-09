const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");
const { authRouter } = require("./routes/auth.js");
const { profileRouter } = require("./routes/profile.js");
const { requestRouter} = require("./routes/request.js");
// const validator = require("validator");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const {userAuth} = require("./auth.js");
app.use(express.json());
app.use(cookieParser());

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);

// app.use("/user", (req, res) => {
//   res.send("User Data");
// });

// app.post("/sentConnectionRequest",userAuth, async (req, res) => {
//   const user = req.user;
//   console.log("Request Sent SuccessFully");
//   res.send(user.firstName + " Sent Request");
// })

// app.get("/profile",userAuth, async (req, res) => {
//   try {
//     const user = req.user;
//     // const cookies = req.cookies;
//     // const { token } = cookies;
//     // if (!token) {
//     //   throw new Error("Token Invalid");
//     // };
//     // const decoddedMessage = await jwt.verify(token, "DevTinder@123")
//     // if(!decoddedMessage){
//     //   throw new Error("Token Not Verified");
//     // };
//     // const {_id} = decoddedMessage;
//     // const user = await User.findById(_id);
//     res.send(user);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// app.post("/login", async (req, res) => {
//   try {
//     const { password, emailId } = req.body;
//     if (!validator.isEmail(emailId) && password) {
//       throw new Error("Please Enter Valid Email ID or Password");
//     }
//     const user = await User.findOne({ emailId: emailId });
//     if (!user) {
//       throw new Error("User Not Found");
//     }
//     const isPasswordValid = await user.validatePassword(password);
//     if (isPasswordValid) {
//       const token = await user.getJWT();

//       res.cookie("token", token);
//       res.send("LooggedIn SuccessFull");
//     } else {
//       throw new Error("Invalid Credentials");
//     }
//   } catch (error) {
//     res.send("Something Went Wrong " + error.message);
//   }
// });

// app.post("/signup", async (req, res) => {
//   try {
//     const { firstName, lastName, emailId, password, gender, about, skills } =
//       req.body;

//     validationSignUpData(req);

//     const passwordHash = await bcrypt.hash(password, 5);

//     const user = new User({
//       firstName,
//       lastName,
//       emailId,
//       password: passwordHash,
//       about,
//       skills,
//       gender,
//     });

//     await user.save();
//     res.send("Signup SuccessFully");
//   } catch (error) {
//     throw new Error("Something Went Worng" + error.message);
//   }
// });

app.post("/user", async (req, res) => {
  const userData = req.body;
  try {
    if (!userData.firstName) {
      throw new Error("Please Provide FirstName");
    }
    // if(!userData.emailId){
    //   throw new Error("Please Provide EmailId");
    // }
    if (userData.skills?.length > 5) {
      throw new Error("Skills Can not Be More Than 5");
    }

    const user = new User(userData);
    await user.save();
    res.send("User Saved..");
  } catch (err) {
    res.status(401).send(err.message);
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["about", "gender", "password", "skills"];

    const isUpdateAllowed = Object.keys(data).every((key) =>
      ALLOWED_UPDATES.includes(key),
    );
    if (!isUpdateAllowed) {
      throw new Error("Update Not Allowed");
    }
    if (data.skills?.length > 5) {
      throw new Error("Skills can Not Be More Than 5");
    }
    const user = await User.findByIdAndUpdate(userId, data, {
      runValidators: true,
    });
    res.send("Updated SuccessFully");
  } catch (err) {
    res.send(err.message);
  }
});

// GOOD WAY FIRST CONNECT TO DATABASE THEN LISTEN REQUESTS
connectDB()
  .then(() => {
    console.log("Connected SuccessFully...");
    app.listen(3000, () => {
      console.log("Server Is Listening....");
    });
  })
  .catch((error) => {
    console.log("Error Catched..", error.message);
  });

// THIS IS NOT A GOOD WAY BECAUSE OUR CODE LISTENING REQUEST FIRST THEN COONECTING DATABSE.
// IT SHOULD BE FIRST CONNECT TO DATABASE THEN LISTEN REQUESTS.
// connectDB().then(() => {
//   console.log("Connected SuccessFully...");
// }).catch((error) => {
//   console.log("Error While Connected");
// });

// app.listen(3000, () => {
//   console.log("Server Is Listening....");
// });

// ERROR HANDLING
// app.get("/admin", (req, res) => {
//   try {
//     // Always Use Code In try-catch method
//     throw new Error("ksofkoew");
//     res.status(401).send(err);
//   } catch (error) {
//     res.send(error)
//   }
// });

// app.use("/admin", (err, req, res, next) => {
//   res.send(err);
// });

// ONE MORE CLEAN WAY
// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res) => {
//   res.send("AllData");
// });
// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted User");
// });

// app.get("/user", userAuth, (req, res) => {
//   res.send("This is like multiple middilewares in one HTTP method");
// });

// AVOIDING WRITTING LOGIC AGAIN AND AGAIN
// app.use("/admin", (req, res, next) => {
//   const token = "xyz";
//   const isAuth = token === "xyz";
//   if(!isAuth){
//     res.status(401).send("Unauthorized");
//   } else {
//     next();
//   };
// });

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data");
// });
// app.get("/admin/deleteUser", (req, res) => {
//   res.send("Deleted User");
// })

// WHY WE NEED MIDDLEWARES
// app.use("/user/getAllData", (req,  res) => {
//   const token = "xz";
//   const isAuth = token === "xyz";
//   if(isAuth){
//     res.send("All Data");
//   } else {
//     res.status(401).send("Unauthorized");
//   }
// });

// app.use("/user/deleteUser", (req,  res) => {
//   const token = "xyz";
//   const isAuth = token === "xyz";
//   if(isAuth){
//     res.send("Deleted User");
//   } else {
//     res.status(401).send("Unauthorized");
//   }
// })

//ANOTHER WAY HANDLING ROUTE HANDLER
// app.get("/user", (req, res, next) => {
//   console.log("User 1");
//   // res.send("User 1");
//   next();
// });

// app.get("/user", (req, res, next) => {
//   console.log("User 2");
//   res.send("User 2");
// });

// ADDING ARRAY IN MULTIPLE MIDDLEWARES
// app.use("/user", [
//   (req, res, next) => {
//     console.log("User 1");
//     next();
//   },
//   [
//     (req, res, next) => {
//       console.log("User 2");
//       next();
//     },
//     (req, res, next) => {
//       console.log("User 3");
//       res.send("Hello User 3");
//     },
//   ],
//   (req, res, next) => {
//     console.log("User 4");
//   },
// ]);

// Route Handling
// app.use("/user", (req, res, next) => {
//     console.log("User 1 Fetched Successfully");
//     res.send("Hello User");
//     next();
// },(req, res) => {
//     console.log("User 2")
//     res.send("Hello User 2");
// });

// Using Next Function Before res.send()
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("User 1 Fetched Successfully");
//     next();
//     res.send("Hello User 1");
//   },
//   (req, res) => {
//     console.log("User 2");
//     res.send("Hello User 2");
//   });

// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("User 1 Fetched Successfully");
//     // res.send("Hello User");
//     next();
//   },
//   (req, res, next) => {
//     console.log("User 2");
//     res.send("Hello User 2");
//   },
//   (req, res, next) => {
//     console.log("User 3");
//     res.send("Hello User 2");
//   },
//   (req, res, next) => {
//     console.log("User 4");
//     res.send("Hello User 2");
//   },
//   (req, res, next) => {
//     console.log("User 5");
//     res.send("Hello User 2");
//   },
// );

// We Can Add as many Route Handler Functions Inside An Array
// app.use("/user", (req, res, next) => {
//     next();
//     res.send("Hello User");
// }, [
//     (req, res) => {
//         console.log("Handler 1 In Array");
//     },
//     (req, res) => {
//         console.log("Handler 2 in Array");
//     }
// ]);

// // Dynamic API's Handling
// app.get("/user/:userId/:name/:password", (req, res) => {
//     console.log(req.params);
// );

//     res.end("Dynamic Data");
// });

// // Getting Query Params
// app.get("/user", (req, res) => {
//     console.log(req.query)
//     res.send({Fname: "A", Lname: "B"});
// });

// //ADVANCED ROUTING CONCEPTS

// app.get("/abc", (req, res) => {
//     res.send("abc Testing");
// });

// // Optional (?) Method
// app.get(/^\/ab?c$/, (req, res) => {
//     res.send("abc ? Testing");
// });

// app.get(/^\/a(bc)?d$/, (req, res) => {
//     res.send("abc ? Testing");
// });

// //(+) METHOD
// app.get(/^\/ab+c$/, (req, res) => {
//     res.send("abc +")
// });

// app.get(/^\/a(bc)+d$/, (req, res) => {
//     res.send("abcd +")
// });

// app.get(/.*fly$/, (req, res) => {
//     res.send("Worked fly");
// });

// HTTP METHODS
// app.get("/user", (req, res) => {
//     res.send("User URL");
// });

// app.post("/user", (req, res) => {
//     res.send({Fname: "A", Lname: "b"});
// });

// app.delete("/user", (req, res) => {
//     res.send("Deleted");
// });

// app.use("/hello/2", (req, res) => {
//     res.send("Hello URL 2");
// });

// app.use("/hello", (req, res) => {
//     res.send("Hello Url");
// });

// app.use("/test/1", (req, res) => {
//     res.send("Test URL 1");
// });

// app.use("/test", (req, res) => {
//     res.send("Test Router Url");
// });

// app.use("/", (req, res) => {
//     res.send("Hello World");
// });

// app.listen(3000, () => {
//   console.log("Server Is Listening....");
// });
