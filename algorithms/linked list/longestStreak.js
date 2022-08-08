// write a function that takes in the head of a linked list as an argument
// the function should return the length of the longest consecutive streak
// of the same value within the list
// *this is very similiar, if not identical, to the Google interview question I had

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// *imagine that all you concerned with is finding the longest consecutive streak

// *iterative
function longestStreak(head) {
  let current = head;
  let currentStreak = 0;
  let maxStreak = 0;
  let prevVal = null;

  while (current !== null) {
    if (current.val === prevVal) {
      currentStreak++;
    } else {
      currentStreak = 1;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
    prevVal = current.val;
    current = current.next;
  }
  return maxStreak;
}

console.log(longestStreak(a));
