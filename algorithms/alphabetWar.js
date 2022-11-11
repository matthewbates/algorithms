// there are two groups of hostile letters
// write a function that accepts fight string consisting of only
// small letters and return who wins the fight
// when the left side wins, return "Left side wins!"
// when the right side wins, return "Right side wins!"
// in any other case, return "Let's fight again!"

const alphabetWar = (fight) => {
  // initiate LEFT/RIGHT objects
  const LEFT = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };
  const RIGHT = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };
  let leftCount = 0;
  let rightCount = 0;

  // value of fight will the the integer counter
  for (let char of fight) {
    // if the letter is in the LEFT object
    if (char in LEFT) {
      // increment leftCount by char's value
      leftCount += LEFT[char];
    }
    // same thing for the RIGHT object
    if (char in RIGHT) {
      rightCount += RIGHT[char];
    }
  }
  // if leftCount is less/greater than rightCount, return the proper string
  if (leftCount > rightCount) return "Left side wins!";
  if (leftCount < rightCount) return "Right side wins!";
  // if there's a draw, return the proper string
  return "Let's fight again!";
};

console.log(alphabetWar("wwppbsmmqd")); // "Left side wins!"
