// write a function that takes in a string as an argument
// the input string will be formatted into multiple groups according to their pattern:
// <number><char>
// for example, "2c" or "3a"
// the function should return an uncompressed version of the string where
// each "char" of a group is repeated "number" times consecutively

function uncompress(s) {
  let result = [];
  const numbers = "0123456789";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j++;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }
      j++;
      i = j;
    }
  }
  return result.join("");
}

console.log(uncompress("2a6b8c10d")); 