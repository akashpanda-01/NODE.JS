const express = require("express");

const app = express();

app.use("/hello/2", (req, res) => {
    res.send("Hello URL 2");
});

app.use("/hello", (req, res) => {
    res.send("Hello Url");
});

app.use("/test/1", (req, res) => {
    res.send("Test URL 1");
});

app.use("/test", (req, res) => {
    res.send("Test Router Url");
});


app.use("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server Is Listening....");
});