const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expire"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./text.txt", "utf8", () => {
  setTimeout(() => console.log("2nd Time Expire"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log("2nd setImmediate"));

  console.log("File Reading CallBack");
});

process.nextTick(() => console.log("nextTick"));

console.log("Last Line of the File");

/*
Output
======

Last Line of the File
nextTick
Promise
Time Expire
setImmediate
File Reading CallBack
2nd nextTick
2nd setImmediate
2nd Time Expire
*/
