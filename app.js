// Problem accumulate votes ~ last vote string char ~ 1 + 2 + 3

var data = ["vote1", "vote2", "vote3", "vote4"];

var sum = data.reduce(function(accumulator, currentValue) {
  // First we'll get the last character of the elment ( string ) using String.prototype.charAt method then convert that numeric string value into Number Data Type using Number(String.Prototype.charAt(index))

  var numericValue = currentValue.charAt([currentValue.length - 1]);

  return accumulator + Number(numericValue);
}, 0);

// It'll return 10

console.log(sum);
