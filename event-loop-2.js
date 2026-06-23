const fs = require("fs");

let a = 100;

setImmediate(() => console.log("setImmediate print"));

Promise.resolve("promise").then(console.log);

fs.readFile("./text.txt", "utf8", () => console.log("File Read Complete"));

setTimeout(() => {
  console.log("Time Expire");
}, [0]);

process.nextTick(() => console.log("process nextTick"));

function print() {
  console.log("a =", a);
}

print();
console.log("Last Line Code Execute");
