const middle = (array => {
  const midOfArray = [];
  //check if array length is more than two, if so, run middle, if not return middleNumbers
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      //for even array
      let midPosition2 = (array.length / 2);
      let midPosition1 = ((array.length / 2) - 1);
      midOfArray.push(array[midPosition1]);
      midOfArray.push(array[midPosition2]);
    } else {
      //for odd array
      let midPosition = Math.floor(array.length / 2);
      midOfArray.push(array[midPosition]);
    }
  }
  return midOfArray;
});

module.exports = middle;