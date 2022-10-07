// write a function that takes in an array of numbers
// the function should return the largest number in the array

function maxValue(nums) {
  // declare a variable, maximum, with the lowest possible integer
  // so that it can be replaced with anything higher
  let maximum = -Infinity;

  // use a for/of to loop through the values of the array
  for (let value of nums) {
    // if the current value is larger than maximum,
    // replace maximum with the current iteration
    if (value > maximum) {
      maximum = value;
    }
  }
  return maximum;
}

console.log(maxValue([1, 3, 5, 7, 9]));
