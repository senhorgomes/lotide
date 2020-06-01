const eqArrays = require("./eqArrays");


const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2) === false) {
    return (`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
  }
  return (`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

module.exports = assertArraysEqual;