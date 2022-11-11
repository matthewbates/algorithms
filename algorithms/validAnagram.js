// *first solution*
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  // initiate an object
  const lookup = {};

  // for (let i = 0; i < first.length; i++) {
  for (let value of first) {
    // letter will be the count
    let letter = first[value];
    // if letter exists, increment, otherwise, set to 1
    // key[value] ? increase value by 1, else set value to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  // for (let i = 0; i < second.length; i++) {
    for (let value of second) {
    let letter = second[value];
    // can't find lookup letter || letter is zero then
    // it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      // subtract the letter over each iteration
      lookup[letter] -= 1;
    }
  }
  return true;
}

//  *second solution*
function anagrams(s1, s2) {
  // initialize an empty hash (object)
  const count = {};

  // iterates over the values of a data structure,
  // in this case, every character of the string
  for (let char of s1) {
    // iterates over the keys of the object - in this case, char
    // "if the key isn't inside the object"
    if (!(char in count)) {
      // sets the value to 0
      count[char] = 0;
    }
    // else, sets increments the value by 1
    count[char]++;
  }

  for (let char of s2) {
    if (char in count) {
      // if you enter this loop you've found a character present in s2
      // and not present in s1
      count[char]--;
    } else {
      return false;
    }
  }
  // edge case
  for (let char in count) {
    if (count[char] !== 0) {
      // didn't have a matching count for that char
      return false;
    }
  }
  return true;
}

console.log(validAnagram("cats", "scat"));
