// write a function that takes in the head of a linked list as an argument
// the function should return a boolean indicating whether or not the linked
// list contains exactly one unique value

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// returns true if all nods are the same value
const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// *iterative
function isUnivalueList(head) {
  let current = head;

  while (current !== null) {
    if (current.val !== head.val) return false;
    current = current.next;
  }

  return true;
}

console.log(isUnivalueList(u));
