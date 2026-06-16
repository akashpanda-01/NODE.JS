console.log("Hiii");

// Exporting In (ES-Module)
// Using Named-Export
// export var x = 100;

// Exporting In (common-JS module)
// module.exports = {
    // x,
    // calculateSum

    // x: x,
    // calculateSum: calculateSum
// }

var x = 100;

function calculateSum(a, b) {
    console.log(a + b);
};

module.exports = {
    x,
    calculateSum

    // x: x,
    // calculateSum: calculateSum
}

function def() {
    var a = 20;
}
 var a = 30;
// console.log(a);


(function abc() {
  var a = 100;  
})();

// console.log(a);
