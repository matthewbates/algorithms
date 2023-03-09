// write a function that takes in an array of numbers as an argument
// the function should rearrange elements of the array such that all 5's appear at the end
// your function should perform this operation in-place by mutating the original array
// the function should return an array (no mutations)

function fiveSort(nums) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    if (nums[j] === 5) {
      j--;
    } else if (nums[i] === 5) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      i++;
    }
  }
  return nums;
}

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
