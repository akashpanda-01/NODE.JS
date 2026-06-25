const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("1 Crypto Done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("2 Crypto Done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("3 Crypto Done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("4 Crypto Done");
});
// crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
//     console.log("1 Crypto Done");
// });