// given two sorted arrays (nums1 and nums2) of size m and n respectively, return the median of the two sorted arrays

//! FINDS THE MEAN OF THE TWO ARRAYS
const findMeanSortedArrays = (nums1, nums2) => {
  const arrayLengthConcat = nums1.length + nums2.length;
  const concatedArr = nums1.concat(nums2).reduce((a, b) => a + b);
  return concatedArr / arrayLengthConcat;
};

console.log(findMeanSortedArrays([1, 2, 5, 4, 6, 8], [4, 3, 5, 4]));
