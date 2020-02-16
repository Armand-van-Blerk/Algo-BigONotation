// write a function that calculates the sum of all numbers from 1  up to (and including) some number "n"
// Example 2
// No for loop, this is more of a mathimatical solution

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo(1000000000));

// as you can see there are 2 working solutions, which one is better?
// what does better mean? Fater calculations(speed)? Less memory-intensive(memory-usage)? More readable(readablility)?
// Evaluating speed_____

// below script is for running in browser using snippets, the ext we installed shows the relevant time for output.

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

// Total: 0.256 seconds
