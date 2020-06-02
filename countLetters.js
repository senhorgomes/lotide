const countLetters = function(word) {
  const results = {};
  for (const letter of word) {
    if (letter !== " ") { //checks to see if 'letter' is a space, if it is, it skips it
      if (results[letter]) { //If Key object exist, add one to that value.
        results[letter] += 1;
      } else {
        results[letter] = 1; //If key does not exist, create it, and add a starting value of 1 to is
      }
    }
  }
  return results;
};

module.exports = countLetters;
//Sample test
//console.log(countLetters("you are doing great"));