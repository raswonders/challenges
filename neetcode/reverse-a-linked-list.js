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

// Brute force O(N^2)
function reverseList(head) {
  let newHead = null;
  let newTail = null;
  while (head) {
    let tail = head;
    let prevTail = null;
    while (tail.next) {
      prevTail = tail;
      tail = tail.next;
    }

    if (prevTail) {
      prevTail.next = null;
    } else {
      head = null;
    }

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

// single pass O(N) time O(N) extra memory
function reverseList2(head) {
  let newHead = null;
  let node = head;
  while (node) {
    if (!newHead) {
      newHead = new ListNode(node.val);
    } else {
      let temp = new ListNode(node.val);
      temp.next = newHead;
      newHead = temp;
    }
    node = node.next;
  }
  return newHead;
}

// single pass with O(1) extra memory
function reverseList3(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let savedNext = curr.next;
    curr.next = prev;
    prev = curr;
    curr = savedNext;
  }
  return prev;
}

let list1 = createListFromArray([0, 1, 2, 3]);
console.log(list1.toString());
console.log(reverseList3(list1).toString());
