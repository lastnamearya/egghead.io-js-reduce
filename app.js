// Find the sum of Numbers in an array that are not repeated ~ Like if one number for example 2 repeated more then once then dont' add it in whole sum.

// It's sum needs to be 1 + 3 + 4 = 8

const array = [1, 2, 2, 3, 4];

const intermediatoryArray = [];

const result = array.reduce(function(accumulator, currentValue) {
  if (!intermediatoryArray.includes(currentValue)) {
    intermediatoryArray.push(currentValue);
    accumulator += currentValue;
  } else {
    accumulator -= currentValue;
  }

  return accumulator;
}, 0);

console.log(result);
