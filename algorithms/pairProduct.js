// write a function, pairProduct, that takes in an array and a target product as arguments
// the function should return an array containing a pair of indices whose elements
// multiply to the given target

// *brute force approach(O(n^2))
function pairProduct(numbers, targetProduct) {
  const nums = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === targetProduct) {
        nums.push(i, j);
      }
    }
  }
  return nums;
}

console.log(pairProduct([3, 2, 5, 4, 1], 8));
