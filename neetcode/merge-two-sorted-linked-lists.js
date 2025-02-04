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
  let head;
  let tail;
  for (let value of arr) {
    let node = new ListNode(value, null);
    if (tail) {
      tail.next = node;
      tail = node;
    } else {
      head = node;
      tail = node;
    }
  }
  return head;
}

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }

  return dummy.next;
}

const list1 = createListFromArray([1, 2, 4]);
const list2 = createListFromArray([1, 3, 5]);

console.log(mergeTwoLists(list1, list2).toString());
