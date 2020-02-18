// Focus on the space complexity

function sum(arr) {
  let total = 0; // one number
  for (let i = 0; i < arr.length; i++) {
    // {let i = 0} another number
    total += arr[i];
  }
  return total;
}
sum(5);

// as "n" grows it does not have an impact on space as the two numbers that are listed is asociated with space.
// the two variables are adding to the "total" variable, but we are not creating a new variable
// O(1) space
// always the same no matter the size of the input
