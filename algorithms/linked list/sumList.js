// write a function that takes in the head of alinked list containing numbers as an argument
// the function should return the total sum of all values in the linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// *iterative
function sumList(head) {
  let sum = 0;
  let current = head;

  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
}

// *recursive
function sumList(head) {
  if (head === null) return 0;
  return head.val + sumList(head.next);
}

