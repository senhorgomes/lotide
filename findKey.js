const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) { //Uses callback methods to search up an object by its key value
      return key
    }
  }
}

module.exports = findKey;
/*findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");


assertEqual(findKey({
  "The Matrix": { personalRating: 4 },
  "Avengers":   { personalRating: 3 },
  "Joe Dirt":      { personalRating: 2 },
  "Night at the Roxbury":   { personalRating: 5 },
  "Akira":       { personalRating: 4 },
  "Cabin in The Woods":  { personalRating: 3 },
  "Blade Runner":  { personalRating: 5 }
}, x => x.personalRating === 5), "Night at the Roxbury");*/