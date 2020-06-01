const tail = require("../tail");
const assert = require('chai').assert;

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
// Test Case: Check if the original array is not modified
const blank = tail([]);
tail(blank); // no need to capture the return value since we are not checking it
//Check is array has been modified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

describe("#tail", () => {
  it("returns a length 0 for a blank array []", () => {
    assert.strictEqual(blank.length, 0);
  });
  it("returns a length of 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(words.length, 3); // original array should still have 3 elements!
  });
  it("returns a length of 2 for tail(['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(result.length, 2); // ensure we get back a length of two after removing only the first element
  });
  it("returns 'Lighthouse' when prompted to return index 0 of trimmed array.", () => {
    assert.strictEqual(result[0], "Lighthouse"); // ensure the trimmed array returns an array with everything except the first element
  });
  it("returns 'Labs' when prompted to return index 1 of trimmed array.", () => {
    assert.strictEqual(result[1], "Labs"); // ensure the trimmed array returns an array with everything except the first element
  });
});