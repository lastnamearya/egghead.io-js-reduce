// Reactive Programming.

// Pipeline ~ Composing functions with reduce

function increment(input) {
  return input + 1;
}
function decrement(input) {
  return input - 1;
}
function double(input) {
  return input * 2;
}
function halve(input) {
  return input / 2;
}

// A series of functions that get applied some initial value in order to return some final value and this pipeline can be invoked as just single function.

const pipeline = [increment, double, decrement];

const initialValue = 1;

const result = pipeline.reduce(function(accumulator, currentFunc) {
  return currentFunc(accumulator);
}, initialValue);

console.log(result);
