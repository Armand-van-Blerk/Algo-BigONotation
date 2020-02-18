// Counting up and counting down.

function countUpAndDown(n) {
  console.log("going up");
  for (let i = 0; i < n; i++) {
    // O(n) as "n" grows the loop grows
    console.log(i);
  }
  console.log("at the top.. going down");
  for (let j = n - 1; j >= 0; j--) {
    // O(n) as "n" grows the loop grows
    console.log(j);
  }
  console.log("back down lol");
}

countUpAndDown(10);

// number of operations grows proportionaly an "n" increments and decrements
