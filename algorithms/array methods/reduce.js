// reduce practice

// *using the traditional for/of loop to iterate through values of iterable objects
const products = [
  { name: "Shampoo", price: 4.99 },
  { name: "Donuts", price: 7.99 },
  { name: "Cookies", price: 6.49 },
  { name: "Bath Gel", price: 13.99 },
];

const getTotalAmountForProducts = (products) => {
  let totalPrice = 0;

  // same as a for loop; calculates the values of an object
  for (const product of products) {
    totalPrice += product.price;
  }
  return totalPrice;
};

const doubleAndSummed = [1, 2, 3].reduce((a, b) => {
  return b * 2 + a;
  // if no initial value is supplied, the first element in the array is used as the starting value. This would result in 11, not 12
}, 0);

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((a, b) => a + b);

console.log(totalBatteries);
