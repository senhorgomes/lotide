const map = function(array, callback) {
  const results = []; //Creates a new array of the first letter of each word in an element, from an existing array
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;
/*const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Oh", "My", "Goodness"];
const words3 = ["Rolling", "On", "Floor", "Laughing"];

const results1 = map(words, word => word[0]);
const results2 = map(words2, word => word[0]);
const results3 = map(words3, word => word[0]);
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results2, [ 'O', 'M', 'G' ]));
console.log(assertArraysEqual(results3, [ 'R', 'O', 'F', 'L' ]));*/
