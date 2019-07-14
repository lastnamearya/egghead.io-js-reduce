// Flatten an array of arrays using reduce.

const flattened = [[0, 1], [2, 3], [4, 5]];

const result = flattened.reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);

console.log(result);
