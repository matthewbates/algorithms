// write a function linearSearch that accepts an array and a value
// return the index at which the value exists
// if the value doesn't exist, return -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}
