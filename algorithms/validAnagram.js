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
