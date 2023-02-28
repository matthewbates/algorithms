// given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid
// A input string is valid if:
// open brackets must be closed by the same type of brackets
// open brackets must be closed in the correct order
// every close bracket has a corresponding open bracket of the same type

function validParenthesis(s) {
  const leftSymbols = [];

  // loop through each char of s
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      leftSymbols.push(s[i]);
    } else if (
      s[i] === ")" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "("
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "}" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "{"
    ) {
      leftSymbols.pop();
    } else if (
      s[i] === "]" &&
      leftSymbols.length !== 0 &&
      leftSymbols[leftSymbols.length - 1] === "["
    ) {
      leftSymbols.pop();
    } else {
      return false;
    }
  }
  return leftSymbols.length === 0;
}

console.log(validParenthesis("{}{}{)")); // false
