class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  toString() {
    let result = "";
    let node = this;
    while (node) {
      result += node.val;
      result += node.next ? " -> " : "";
      node = node.next;
    }
    return result;
  }
}

// Brute force
function reverseList(head) {
  let newHead = null;
  let newTail = null;
  // O(N^2)
  while (head) {
    let tail = head;
    let prevTail = null;
    while (tail.next) {
      prevTail = tail;
      tail = tail.next;
    }

    // remove from old 
    if (prevTail) {
      prevTail.next = null;
    } else {
      head = null;
    }

    // O(1) insert to new
    if (!newHead) {
      newHead = tail;
      newTail = tail;
    } else {
      newTail.next = tail;
      newTail = tail;
    }
  }
  return newHead;
}

function createListFromArray(arr) {
  let head = null;
  let tail = null;

  for (let val of arr) {
    let node = new ListNode(val);
    if (!head) {
      head = node;
      tail = node;
    }
    tail.next = node;
    tail = node;
  }

  return head;
}

let list1 = createListFromArray([0, 1, 2, 3]);
console.log(list1.toString())
console.log(reverseList(list1).toString());
