// write a function, intersection, that takes in two arrays, a,b, as arguments
// the function should return a new array containing elements that are in both
// if the two arrays

function intersection(a, b) {
  const result = [];
  const setA = new Set(a);

  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
}
