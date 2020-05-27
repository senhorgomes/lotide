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
/*const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};*/

// ACTUAL FUNCTION
const middle = function(array) {
  const midOfArray = [];
  //check if array length is more than two, if so, run middle, if not return middleNumbers
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      //for even array
      let midPosition2 = (array.length / 2);
      let midPosition1 = ((array.length / 2) - 1);
      midOfArray.push(array[midPosition1]);
      midOfArray.push(array[midPosition2]);
    } else {
      //for odd array
      let midPosition = Math.floor(array.length / 2);
      midOfArray.push(array[midPosition]);
    }
  }
  return midOfArray;
};

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
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3])); // = False