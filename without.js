const without = function(originalArray, removeFromArray) {
  let shortenedArray = [];
  for (let i = 0; i < originalArray.length; i++) {
    for (let q = 0; q < removeFromArray.length; q++) {
      if (originalArray[i] !== removeFromArray[q]) {
        shortenedArray.push(originalArray[i]);
      }
    }
  }
  return shortenedArray;
};

module.exports = without;
/*const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual((without(words, ["lighthouse"])), ["hello", "world"]));*/