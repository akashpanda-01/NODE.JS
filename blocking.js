const crypto = require("crypto");

console.log("Hello World");

var a = 24243;
var b = 2421;


// Synchronous Way
crypto.pbkdf2Sync("Password", "salt", 5000, 50, "sha512");
console.log("Done");

// pbkdf = Password Base Key Derivation Function
crypto.pbkdf2("Password", "salt", 500, 10, "sha512", (err, key) => {
    console.log("Key Is Genereted", key);
});


setTimeout()


function multiplyFn(a,b){
    const result = a * b;
    return result;
};

const c = multiplyFn(a, b);
console.log(c);
