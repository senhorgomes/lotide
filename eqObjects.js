const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false; //checks the length of the objects
  }
  for (let keyObj1 in object1) { //goes through every key in object 1 and compares it to the same key position in object 2
    for (let keyObj2 in object2) {
      if (keyObj1 === keyObj2) { // if they have similar keys, it checks the length of the values
        if (Array.isArray(object1[keyObj1])) { //is one of them an array?
          if (Array.isArray(object2[keyObj2])) { //if so, is the other on an array as well? if not, return false
            if (!eqArrays(object1[keyObj1], object2[keyObj2])) { //uses eqArrays to check if both the arrays are equal length and the elements match
              return false;
            }
          }
        } else {
          if (object1[keyObj1] !== object2[keyObj2]) { //if they do not match at all, return false
            return false;
          }
        }
      }
    }
  }
  return true;
};

module.exports = eqObjects;
//Sample tests
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
//assertEqual(eqObjects(ab, ba), true); // => true
//
//const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false
//
//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true
//
//const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false