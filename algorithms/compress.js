// write a function that takes in a string as an argument
// the function should return a compressed version of the string where
// consecutive occurrences of the same characters are compressed into
// the number of occurrences followed by the character
// for example, "aaa" compresses to "3a"; "t" should remain as "t"

function compress(str) {
  let result = [];
  let i = 0;
  let j = 0;

  while (j <= str.length) {
    if (str[i] === str[j]) {
      j += 1;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(str[i]);
      } else {
        result.push(num, str[i]).toString();
      }
      i = j;
    }
  }
  return result.join("");
}

console.log(compress("aaaabbbbccde"));
