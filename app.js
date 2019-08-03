// Find Intersection between Array.

function intersection() {
  const argumentsArray = Array.from(arguments);

  const sortedArray = argumentsArray.sort(function(a, b) {
    return a.length - b.length;
  });

  const resultArray = [];

  const smallestArray = sortedArray[0];

  // i = 1, We'll skip the first smallest Array and starts with other array after that.

  for (let i = 1; i < sortedArray.length; i++) {
    // Second we execute a new loop on every nested array to check if the nested array element includes in the smallestArray or not.
    for (let j = 0; j < sortedArray[i].length; j++) {
      if (smallestArray.includes(sortedArray[i][j])) {
        const value = sortedArray[i][j];
        // Then we also have to check for If it's include in other arrays as well. If it's then we push it to our results Array.

        // length ~ Hook to check if it's included in all nested arrays.

        let length = 0;

        // We update our length value based on if it includes in other nested arrays

        for (let k = 1; k < sortedArray.length; k++) {
          if (sortedArray[k].includes(value)) {
            length += 1;
          }
          // No else clause here.
        }

        // When our length becomes equal to sortedArray length - 1 . Why - 1 because we're not operating on smallest Array. Then we push it to our result and we only push uniqe values that's are not already in the result array.

        if (length === sortedArray.length - 1) {
          if (!resultArray.includes(value)) {
            resultArray.push(value);
          }
          // No else clause here.
        }
        // No else clause here.
      }
    }
  }

  // finally we'll return our resultArray

  return resultArray;
}

console.log(
  intersection([5, 10, 15, 1, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
