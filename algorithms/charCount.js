// count the number of characters, case insensitive, in a string - integers included
// return an object with the count of each character/integer

function charCount(str) {
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}
