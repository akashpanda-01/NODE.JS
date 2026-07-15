"use strict";

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputStdin
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });
//   main();
// });

// function readline() {
//   return inputString[currentLine++];
// }

// function greeting(parameterValue) {
//   console.log(parameterValue);

//   console.log("Hello, World!");
//   console.log("Welcome to 10 Days of JavaScript!");
// }

// function main() {
//   const parameterValue = readline();
//   greeting(parameterVariable);
// }

// Convert  to an integer (Number type), then sum it with  and print the result on a new line using console.log.
// Convert  to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
// Print the concatenation of  and  on a new line using console.log. Note that  must be printed first.
// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function performOperation(secondInteger, secondDecimal, secondString) {
//     const firstInteger = 4;

//     const firstDecimal = 4.0;

//     const firstString = 'HackerRank ';
//     console.log(firstInteger + Number(secondInteger));
//     console.log(firstDecimal + Number(secondDecimal));
//     console.log(firstString + secondString);
// }

// function main() {
//     const secondInteger = readLine();
//     const secondDecimal = readLine();
//     const secondString = readLine();

//     performOperation(secondInteger, secondDecimal, secondString);
// }

// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

function vowelsAndConsonants(s) {
  const char = "aeiou";
  for (let ch of s) {
    if (char.includes(ch.toLowerCase())) {
      console.log(ch);
    }
  }
  for (let ch of s) {
    if (!char.includes(ch.toLowerCase())) {
      console.log(ch);
    }
  }
}
// vowelsAndConsonants("javAScriptLoop");

function regexVar(s) {
  let re = /^([aeiou]).*\1$/;
  return re;
}
// const val = regexVar();
// console.log(val.test("abcda"));


// Complete the reverseString function; it has one parameter, . You must perform the following actions:
// Try to reverse string  using the split, reverse, and join methods.
// If an exception is thrown, catch it and print the contents of the exception's  on a new line.
// Print  on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.

function reverseString(s) {
    try{
      console.log(s.split("").reverse().join(""));
    } catch(err){
      console.log(err.message);
      console.log(s);
    };
}
// reverseString("akash")

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.trim().split('\n').map(string => {
//         return string.trim();
//     });
    
//     main();    
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function isPositive(a) {
//     if(a > 0){
//         return "YES";
//     } else if(a == 0){
//         throw new Error("Zero Error");
//     } else{
//         throw new Error("Negative Error");
//     }
// }

// function main() {
//     const n = +(readLine());
    
//     for (let i = 0; i < n; i++) {
//         const a = +(readLine());
      
//         try {
//             console.log(isPositive(a));
//         } catch (e) {
//             console.log(e.message);
//         }
//     }
// }