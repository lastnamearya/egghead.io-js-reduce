/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

*/

const inputArray = [2, 7, 11, 15];
const targetValue = 9;

// Solution

const twoSum = function(nums, target) {
  return nums.reduce(function(accumulator, currentValue, currentIndex, array) {
    array.forEach((value, index) => {
      if (index !== currentIndex && currentValue + value === target) {
        accumulator.push(currentIndex);
      }
    });
    return accumulator;
  }, []);
};

console.log(twoSum(inputArray, targetValue));
