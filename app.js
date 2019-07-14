// Reduce ~ accumulating properties of objects inside an array.

var sum = [{ x: 1 }, { x: 2 }, { x: 3 }];

// If we forget to pass the initial value as an additional argument then accumulator will be the first value of sum array.

var result = sum.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.x;
});

// It'll log ~ [object object]23 ~ The reason is we forget to pass the initialValue to accumulator and it will be become [object object] + 2 + 3 ~ That coerces to [object object]23

console.log(result);

// Passed initial value explicity.

var initialValue = 0;

var newResult = sum.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.x;
}, initialValue);

// It'll be 6.

console.log(newResult);
