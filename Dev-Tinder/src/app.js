const express = require("express");

const app = express();

//ADVANCED ROUTING CONCEPTS

app.get("/abc", (req, res) => {
    res.send("abc Testing");
});

// Optional (?) Method
app.get(/^\/ab?c$/, (req, res) => {
    res.send("abc ? Testing");
});
app.get(/^\/a(bc)?d$/, (req, res) => {
    res.send("abc ? Testing");
});

//(+) MRTHOD
app.get(/^\/ab+c$/, (req, res) => {
    res.send("abc + Testing");
});

app.get(/^\/a(bc)+d$/, (req, res) => {
    res.send("abc + Testing");
});




// app.get(/.*fly$/, (req, res) => {
//     res.send("Worked");
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