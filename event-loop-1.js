const fs = require("fs");

let a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./text.txt", "utf8", () => {
  console.log("File read Complete");
});

setTimeout(() => {
  console.log("Time Expire");
});


function print() {
    console.log("a - ", a);
};

print();

console.log("Last Line Of The Code");