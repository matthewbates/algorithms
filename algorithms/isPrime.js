// write a function that takes in a number as an argument
// the function should return a boolean whether or not the given
// number is prime or not

function isPrime(num) {
  // if the number is less than 2, it must be prime since a prime
  // number is only divisible by 1 and itself
  if (num < 2) return false;

  // use a for loop to iterate through each integer up to
  // num and square it
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // if num modolo current iteration's remainder is 0, it's not prime
    if (num % i === 0) return false;
  }
  // if none of the iterations provided a remainder of 0, it must
  // be a prime number
  return true;
}

console.log(isPrime(7));
