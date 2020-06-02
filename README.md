# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bryanpgomes/lotide`

**Require it:**

`const _ = require('@bryanpgomes/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)` : Test result of a function and compare it to the expected about, uses arrays. Also uses eqArray.
* `assertEqual(actual, expected)` : Test result of a function and compare it to the expected about.
* `assertObjectsEqual(actual, expected)` : Test two objects to verify if they prove to be real, uses eqObjects.
* `countLetters(word)` : Provide a word(string) or a sentence and it will tell you how many of each letter exists. e.g. `"Hello" {H: [1], e: [1], l: [2], o: [1]}`
* `countOnly(allItems, itemsToCount)` : Provide an array and it will count only the items you wish to count(itemsToCount).
* `eqArrays(array1, array2)` : Compare two arrays to see if they are truly identical. Compares length, and element positions.
* `eqObjects(object1, object2)` : Compare two objects to see if they are truly identical. Compares key values, length and object length.
* `findKey(object, callback)` : Provide the value of an object key through a functions, and it will return the first object key that best suites the function.
* `findKeyByValue(object, keyValue)` : Provide the value of an object key, and it will return the object key. If no such key will exist, no object will be returned.
* `head(array)` : Returns an array with only the first index of the original array.
* `letterPosition(sentence)` : Provide a sentence(string), and it will return an object with all the index positions that letters appears in that setence. e.g. `"Hello" {H: [0], e: [1], l: [2, 3], o: [4]}`
* `map(array, callback)` : From an existing array, this will create a new array that is modified from a function.
* `middle(array)` : Returns the middle element of an arrays. If the array has an even number of elements, it will return the two middle elements.
* `tail(array)` : Removes the first element of an array and returns a new array with the rest of the elements.
* `takeUntil(array, callback)` : Returns an slice of an array, starting from the beginning, until the callback point.
* `without(originalArray, removeFromArray)` : Allows you to filter an array by removing a certain element from an array.