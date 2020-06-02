const findKeyByValue = function(object, keyValue) {
  for (let value in object) {
    let key = value.toString()
    if (object[key] === keyValue) { //Same thing as findKey, but this one lets you search up, using words, the value and it returns the key.
      return key
    }
  }
};

module.exports = findKeyByValue;
/*const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))*/