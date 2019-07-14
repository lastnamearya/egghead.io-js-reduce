// Flatting nested objects using map and reduce.

const nestedArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

// My current approach through map

const result = nestedArray.map(({ id }) => id);

console.log(result);

// New approach using ~ reduce

const reduceResult = nestedArray.reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue.id);
}, []);

console.log(reduceResult);
