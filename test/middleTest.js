const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

// TEST CODE
// ...
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

console.log(assertArraysEqual(middle([1]), [])); // = True
console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // = True
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // = True
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // = true