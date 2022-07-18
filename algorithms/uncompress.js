// write a function that takes in a string as an argument
// the input string will be formatted into multiple groups according to their pattern:
// <number><char>
// for example, "2c" or "3a"
// the function should return an uncompressed version of the string where
// each "char" of a group is repeated "number" times consecutively

const uncompress = (s) => {
  let result = [];
  const numbers = "0123456789";
  // represents start of the number portion
  let i = 0;
  // represents exclusive end of number portion
  let j = 0;
  // while j pointer is less than or equal to the length of the string
  while (j <= s.length) {
    // if j still points at a number
    if (numbers.includes(s[j])) {
      // increment j
      j++;
    } else {
      // logically slice from i up to but not including j, convert to number
      const num = parseInt(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }
      j++;
      // catch i back up to j and continue the loop
      i = j;
    }
  }
  return result.join("");
};

console.log(uncompress("2a6b8c10d"));
