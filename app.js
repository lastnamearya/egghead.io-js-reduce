// Counting instances of values in an object like how many times particular property occurs.

const namesArray = ["Alice", "Bob", "Tiff", "Bruce", "Alice", "Bob", "Alice"];

const resultArray = namesArray.reduce(function(accumulator, currentValue) {
  // Here it's written first but executed later after else, If there's currentValue property already exists in accumulator which has value of 1. If we found it then we increased it by 1.

  if (currentValue in accumulator) {
    accumulator[currentValue]++;
  } else {
    // Here we first add the curretValue property to accumualator and set it value to 1.

    accumulator[currentValue] = 1;
  }

  // In last we return our accumulator Object. Why object ~ because we explicity passed empty object as an initial value for the accumulator.

  return accumulator;
}, {});

console.log(resultArray);
