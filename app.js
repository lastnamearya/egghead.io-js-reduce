// Flatten a nested array using Reduce.

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flatArray = data.reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

console.log(flatArray);
