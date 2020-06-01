const assert = require('chai').assert;
const middle = require("../middle");

// TEST CODE
// ...


//console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // = True
//console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // = True
//console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // = true

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns 2 for middle of [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 3 for middle of [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});