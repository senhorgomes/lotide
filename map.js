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

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Oh", "My", "Goodness"];
const words3 = ["Rolling", "On", "Floor", "Laughing"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results2, [ 'O', 'M', 'G' ]));
console.log(assertArraysEqual(results3, [ 'R', 'O', 'F', 'L' ]));
