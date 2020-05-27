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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let letter = sentence[i]
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      };
    };
  };
  return results;
};

console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello", "e"), [1]);