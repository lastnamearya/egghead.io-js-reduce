const data = [1, 2, 3];

// Double the value of each array element using map

const mapResult = data.map(currentValue => currentValue * 2);

console.log(mapResult);

// Double the value of each array element using reduce

const reduceResult = data.reduce(function(accumulator, currentValue) {
  accumulator.push(currentValue * 2);
  return accumulator;
}, []);

// Return an array with even Numbers

// We here used filter to return an even Array

const evenArray = data.filter(currentValue => currentValue % 2 === 0);

console.log(evenArray);

// Reduce implementation for the same ~ even values

const evenReducedArray = data.reduce(function(accumulator, currentValue) {
  if (currentValue % 2 === 0) {
    accumulator.push(currentValue);
  }
  // No else here, because we only going to push currentValue to our accumulator if it's an even no.

  return accumulator;
}, []);

console.log(evenReducedArray);

// Filter and Double the Array for the Even Values

const data2 = [1, 2, 3, 4, 5, 6];

// Using filter and map together

const filterMapped = data2
  .filter(currentValue => currentValue % 2 === 0)
  .map(currentValue => currentValue * 2);

// It'll return [4, 8, 12] which is doubled value of [2, 4, 6]

console.log(filterMapped);

// Using Reduce ~ One single reduce funtion will do the both things first it'll filter the array then it'll doubles the array. That's how it's reduced the complexity of the above program.

const filterReduced = data2.reduce(function(accumulator, currentValue) {
  const t1 = performance.now();

  if (currentValue % 2 === 0) {
    accumulator.push(currentValue * 2);
  }
  // No else clause here

  return accumulator;
}, []);

// Return same like above filterMapped result ~ [4, 8, 12]

console.log(filterReduced);
