// *first solution*
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise, set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
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
  // initialize an empty object
  const count = {};

  // iterate through every character of the string
  for (let char of s1) {
    // if the key isn't inside the object
    if (!(char in count)) {
      count[char] = 0;
    }
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
    // if the count of char isn't 0, return false
    if (count[char] !== 0) {
      // didn't have a matching count for that char
      return false;
    }
  }
  return true;
}

console.log(anagrams("cats", "scat"));
