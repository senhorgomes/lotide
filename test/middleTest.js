const assert = require('chai').assert;
const middle = require("../middle");

// TEST CODE
// Tests are pretty self explanitory, it runs through the array and finds the middle element
// If the element is even, return the two middle elements.

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
  it("returns 3, 4 for middle of [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});