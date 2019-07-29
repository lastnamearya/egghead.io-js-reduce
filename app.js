// Practice ~ Count Instances ~ like getting votes and summarizing the results.

const votes = [
  "ember",
  "angular",
  "react",
  "angular",
  "react",
  "angular",
  "vue",
  "ember",
  "vanilla",
  "angular"
];

const voteResults = votes.reduce(function(accumulator, currentValue) {
  if (!accumulator[currentValue]) {
    accumulator[currentValue] = 1;
  } else {
    accumulator[currentValue]++;
  }
  return accumulator;
}, {});

console.log(voteResults);
