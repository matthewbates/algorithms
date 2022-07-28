// write a function that takes in the head of two sorted linked lists as arguments
// the function should merge the two lists together into a single, sorted linked list
// the function should return the head of the merged linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node(5);
const b = new Node(7);
const c = new Node(10);
const d = new Node(12);
a.next = b;
b.next = c;
c.next = d;

const q = new Node(6);
const r = new Node(8);
const s = new Node(9);
q.next = r;
r.next = s;

function mergeLists(head1, head2) {
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next;
}

console.log(mergeLists(a, q));
