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

const takeUntil = function(array, callback) {
  // ...
  for (let input of array) {
    if (callback(input)) {
      return array.slice(0, array.indexOf(input));
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));