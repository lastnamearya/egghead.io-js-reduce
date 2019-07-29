// Counting instances of values in an object like how many times particular property occurs.

const namesArray = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bob", "Alice"];

const resultArray = namesArray.reduce(function(accumulator, currentValue) {
  if (!(currentValue in accumulator)) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});

console.log(resultArray);
