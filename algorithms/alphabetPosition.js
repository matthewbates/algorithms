// given a string, replace every letter with its position in the alphabet
// f anything in the text isn't a letter, ignore it and don't return it
// "a" = 1, "b" = 2, etc.

const alphabetPosition = (text) => {
  // convert text to uppercase
  const upperText = text.toUpperCase();

  // return an integer between 0 and 65535 representing the UTF-16 code unit at the given code
  const mappedArr = upperText.split("").map((letter) => letter.charCodeAt());
  // since the string is uppercased, integers fall between 65 (A) and 90 (Z)
  const filteredArr = mappedArr.filter((number) => {
    if (number >= 65 && number <= 90) {
      return number;
    }
  });
  // since A = 65, if we subtract 64 from it, we are left with 1, which is what the test case indicates a is equal to
  // since the range is between 65 and 90, we can simply subtract 64 from each number (for instance, Z, which is 90, minus 64, is equal to 26, which corresponds to lowercase z -)
  const updatedArr = filteredArr.map((number) => number - 64);

  return updatedArr.join(" ");
};

console.log(alphabetPosition("This is a test string"));
// 20 8 9 19 9 19 1 20 5 19 20 19 20 18 9 14 7