const fs = require("fs");
const https = require("https");

var a = 193869;
var b = 28421;

// https.get("https://v2.jokeapi.dev/joke/Programming", () => {
//   console.log("Fetched Data Succedssfully");
// });

fs.readFile("./text.txt", "utf8", (err, data) => {
  console.log("File Data :", data);
});

setTimeout(() => {
  console.log("SetTimeOut Called After 5 Second");
}, 5000);

function multiplyFn(a,b){
    const result = a * b;
    return result;
};

const c = multiplyFn(a, b);
console.log(c);
