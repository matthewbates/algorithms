// given an array of integers of any length, write a function return an array that has 1 added to the value represented by the array
// the array cannot be empty
// only non-negative, single digit integers are allowed

const upArray = (arr) => {
  // edge cases
  if (typeof arr === "undefined" || arr === null || arr.length === 0)
    return null;

  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // invalid arrays: negative integers and double digit integers
    if (arr[i] < 0 || arr[i] > 9 || typeof arr[i] !== "number") return null;
  }

  // start with the last element in the array (remember, integer must be both non-negative and single digit)
  for (let j = arr.length - 1; j > -1; j--) {
    if (arr[j] !== 9) {
      arr[j] = arr[j] + 1;
      break;
    } else {
      arr[j] = 0;
    }
    // if j = 0, add a 1 to the beginning of the array using .unshift()
    j === 0 ? arr.unshift(1) : null;
  }
  return arr;
};

console.log(upArray([1, 2, 3, 9])); // => [1, 2, 4, 0]
