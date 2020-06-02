const letterPosition = function(sentence) {
  const results = {};
  // logic to update results here
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let letter = sentence[i]
      if (results[letter]) { //This solution used a similar method of countLetter, but instead uses an array to show which index position it is
        results[letter].push(i); // if the array already exists, push the new position into that array
      } else {
        results[letter] = [i]; //else create a key with that letter and an array that show which position the letter is in
      };
    };
  };
  return results;
};

module.exports = letterPosition;
//console.log(letterPositions("hello"));
//console.log(letterPositions("lighthouse in the house"));
//assertArraysEqual(letterPositions("hello", "e"), [1]);