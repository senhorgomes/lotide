// index.js
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters')
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  head: head,
  tail: tail,
  middle: middle
};