// use recursion

// first attempt
function factorial(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= 1;
  }
  return total;
}

// refactored solution
function factorial(num) {
  if (num === 1) return 1;

  return num * factorial(num - 1);
}

// factorial(4)
// 24
