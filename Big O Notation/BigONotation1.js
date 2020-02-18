// write a function that calculates the sum of all numbers from 1  up to (and including) some number "n"

// Example 1
// A for loop method

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(1000000000));

// below script is for running in browser using snippets, the ext we installed shows the relevant time for output.

// var t1 = performance.now();
// addUpTo(1000000000);
// var t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

// Total: 1.789 seconds

// Counting operations:  since the operations are based within a loop, the value of (n) will amount to the number of operations preformed
// Regardless of the number of operations, we can say that the operations grows proportionaly with (n)
