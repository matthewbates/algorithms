// write a function that takes in array as an argument
// sum all the numbers except for the highest or lowest integer in the element
// if an empty value (i.e. null) or the array is empty / < 1, return 0

const sumWithoutHighestOrLowest = (array) => {
  // this was refactored instead of having an if/else if
  if (array == null || array.length < 2) {
    return 0;
  } else {
    // sort the array from smallest to largest integers
    array = array.sort((a, b) => a - b);
    let total = 0;
    // since the array is sorted, start at index 1 and go until the second to last element
    for (let i = 0; i < array.length - 1; i++) {
      // add each iteration to total
      total += array[i];
    }
    return total;
  }
};

console.log(sumWithoutHighestOrLowest([3, 5, 7, 9, 1, 13, 15]));
