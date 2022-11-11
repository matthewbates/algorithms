// write a function, findAverage, that, when given an array of eight
// integers, returns the average of those integers

const arr = [1, 3, 5, 7, 9, 11, 13, 15];

const findAverage = (arr) => {
  // initialize a variable that finds the number of elements in
  // the array (in this case, just 8)
  let total = 0;
  // find the sum of all the elements in the array
  let count = 0;

  // traverse the array to find the sum
  arr.forEach((item, index) => {
    // add each element of the array to the total variable
    total += item;
    // continue the iteration until the count is reached
    count++;
  });
  // divide the values obtained in lines 9 && 10
  return total / count;
};

console.log(findAverage(arr));
