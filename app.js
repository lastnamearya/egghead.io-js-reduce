/* Find the sum of Numbers in an array that are not repeated ~ Like if one number for example 2 repeated more then once then dont' add it in whole sum.

*/

const sampleArray = [1, 2, 2, 3, 2, 4];

// New Solution a little optimized then below solution

function arraySum(array) {
  // First we'll get a clean non-duplicated integers array ~ [1, 2, 3, 4]
  const cleanArray = Array.from(new Set(array));

  // Duplicate Array ~ Hold duplicate integers that occurs more than one time ~ [2, 2]
  const duplicatedArray = array.filter(
    (num, index) => array.indexOf(num) !== index
  );

  return cleanArray.reduce(function(accumulator, currentValue) {
    if (duplicatedArray.indexOf(currentValue) === -1) {
      accumulator += currentValue;
    }
    return accumulator;
  }, 0);
}

console.log(arraySum(sampleArray));

// **************************************************** //

// Right Solution ~ My non-optimized Solution

const intermediatoryArray = [];
const duplicateArray = [];

const newResult = sampleArray.reduce(function(
  accumulator,
  currentValue,
  index,
  array
) {
  if (intermediatoryArray.indexOf(currentValue) === -1) {
    intermediatoryArray.push(currentValue);
  } else {
    duplicateArray.push(currentValue);
  }

  if (index === array.length - 1) {
    intermediatoryArray.forEach(value => {
      if (duplicateArray.indexOf(value) === -1) {
        accumulator += value;
      }
    });
  }

  return accumulator;
},
0);

// console.log(newResult);

// **************************************************** //

/* Old Solution ~ This is not correct solution because it'll break when we apply it for values [1, 2, 3, 2, 2, 4] ~ When a element repeated odd no of times like 3. It'l break.

*/

// It's sum needs to be 1 + 3 + 4 = 8

// const intermediatoryArray = [];

// const result = array.reduce(function(accumulator, currentValue) {
//   if (!intermediatoryArray.includes(currentValue)) {
//     intermediatoryArray.push(currentValue);
//     accumulator += currentValue;
//   } else {
//     accumulator -= currentValue;
//   }

//   return accumulator;
// }, 0);

// // It'll be 6 rather than 8.

// console.log(result);
