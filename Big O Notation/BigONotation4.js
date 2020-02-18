// printing all pairs
// nested loop

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    // O(n) runtime increases as "n" increments
    for (var j = 0; j < n; j++) {
      // O(n) runtime increases as "n" increments
      console.log(i, j);
    }
  }
}
printAllPairs(5);

// An 0(n) inside of an 0(n) operation gives us 0(n * n) OR 0(n^2)
// runtime will be porportionate to n^2
