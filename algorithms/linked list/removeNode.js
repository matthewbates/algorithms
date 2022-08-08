// write a function that takes in the head of a linked list and a target value as arguments
// the function should delete the node containing the target value from the linked list
// and return the head of the resulting linked list
// if the target appears multiple times in the linked list, only remove the first
// instance of the target in the list

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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function removeNode(head, targetVal) {
  if (head.val === targetVal) return head.next;

  let current = head;
  let prevVal = null;

  while (current !== null) {
    if (current.val === targetVal) {
      prevVal.next = current.next;
      break;
    }
    prevVal = current;
    current = current.next;
  }
  return head;
}
