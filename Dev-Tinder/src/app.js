// import {adminAuth} from "./auth.js";
// import express from "express";
const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./auth.js");





// AVOIDING WRITTING LOGIC AGAIN AND AGAIN
app.use("/admin", (req, res, next) => {
  const token = "xyz";
  const isAuth = token === "xyz";
  if(!isAuth){
    res.status(401).send("Unauthorized");
  } else {
    next();
  };
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data");
});
app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted User");
});

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

app.listen(3000, () => {
  console.log("Server Is Listening....");
});
