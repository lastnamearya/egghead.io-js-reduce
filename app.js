// Find mean value of an array using reduce

const data = [1, 2, 3, 4, 5, 3, 1];

const mean = data.reduce(function(
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  // Firs we create an intermediatory value i.e will be our accumulated value.

  let intermediatoryValue = accumulator + currentValue;

  // On the last when our accumulation will finished at that point our currentIndex will become the last index value of the array on which we applied our reduce function. Using that we'll fine the mean of the given array.

  if (currentIndex === array.length - 1) {
    return intermediatoryValue / array.length;
  }

  return intermediatoryValue;
},
0);

console.log(mean);
