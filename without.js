/*
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
*/
const without = function(originalArray, removeFromArray) {
  shortenedArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    for (let q = 0; q < removeFromArray.length; q++){
      if (originalArray[i] !== removeFromArray[q]) {
        shortenedArray.push(originalArray[i]);
      }
    }
  }
  return shortenedArray
};


const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    return (`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return (`🚫🚫🚫 Assertion Failed: ${array1} !== ${array2}`);
    }
  }
  return (`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual((without(words, ["lighthouse"])), ["hello", "world"]));