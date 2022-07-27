// write a function that takes in the head of a linked list as an argument
// the function should return an array containing all values of the nodes in the linked list

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
function linkedListValues(head) {
  const values = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  return values;
}

// *recursive
function linkedListValues(head) {
  const values = [];
  fillValues(head, values);
  return values;
}

function fillValues(head, values) {
  if (head === null) return;

  values.push(head.val);
  fillValues(head.next, values);
}
