// take an integer n (n >= 0) and a digit (0 <= d <= 9) as an integer
// square all numbers "k" (0 <= k <= n) between 0 and n
// count the number of digits d used in writing all the k**2

// example:
// n = 10, d = 1
// the k * k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// we are using the digit 1 in: 1, 16, 81, and 100. The total count is 4

function nbDig(n, d) {
  // tallies count of d digits used in k^2
  let result = 0;

  for (let k = 0; k <= n; k++) {
    // create variable square and conver to a string; split the string of integers
    let square = String(k * k).split("");
    // forEach works since we don't need to return a new array
    square.forEach((s) => (s == d ? result++ : null));
  }
  return result;
}
