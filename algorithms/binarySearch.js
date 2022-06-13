// search through a given array using binary search to find the provided integer
// if the provided integer does not exist in the array, return -1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  // use Math.floor() in case array is an odd number
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}
