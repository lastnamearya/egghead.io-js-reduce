// Reduce complexity using reduce method and improve performance when doing operations on very Big Data

const bigData = [];

// Let's add million numbers to above Big Data Array

for (let i = 0; i < 1000000; i++) {
  bigData.push(i);
}

// ****************************************************** //

// Here first we're going to filter number out of a Million which are even then we double those number values.

// Using Filter and Map together ~ chained.

console.time("bigData");

const filterMapped = bigData
  .filter(currentValue => currentValue % 2 === 0)
  .map(currentValue => currentValue * 2);

console.timeEnd("bigData");

// Result ~ It took approx 67ms to execute the above program.

// ****************************************************** //

// Using reduce

console.time("reducedData");

const reducedData = bigData.reduce(function(accumulator, currentValue) {
  if (currentValue % 2 === 0) {
    accumulator.push(currentValue * 2);
  }
  // No else clause here.

  return accumulator;
}, []);

console.timeEnd("reducedData");

// Result ~ It took approx 51ms to execute the above program using reduce. That's a 16ms performance gain over using map and filter.
