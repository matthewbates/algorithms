// you're in the parking lot of a beach that runs parallel to the beach
// the beach is just wide enough to fit one group of people between the ocean and the road
// the beach is divided into "spots"
// calculate the most consecutive amount of spots you and your friends can occupy

// {taken: true} -> {taken: false} -> {taken: false} -> {taken: true} -> {taken: false}

// *THIS IS A WORK IN PROGRESS AND NOT YET SOLVED*

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// *iterative
function mostConsecutiveSpots(head) {
  let current = head;
  let count = 0;
  let maxSpace = 0;

  while (current !== null) {
    if ((current.val = true)) {
      count > maxSpace ? (maxSpace = count) : (count = 0);
    } else {
      count++;
    }
    current = current.next;
  }
  return maxSpace;
}
