// write a functio nthat will receive one argument, a string
// function should return true if the string is a palindrom (reads the same forwards/backwards)
// return false otherwise

function isPalindrom(str) {
  // base case
  if (str === "" || str.length === 0) return false;

  const regex = /[\W_]/g;
  const lowerCaseRegex = str.toLowerCase().replace(regex, "");
  const reverseLowerCase = lowerCaseRegex.split("").reverse().join("");
  return lowerCaseRegex === reverseLowerCase;
}

console.log(isPalindrom("abba"));
