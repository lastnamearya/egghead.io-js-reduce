// reduceRight ~ Now our accumulation will starts from right to left. Default accumulation will be from left to right. It's handy and good to have in our Toolbox.

const data = [1, 2, 3, 4, "5"];

// result will be ~ 054321 ( String )

const result = data.reduceRight(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(result);
