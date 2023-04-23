import { LinkedList, ListNode } from "../../utils/linked-list.mjs";

function mergeTwoLists(list1, list2) {
  let n1 = copyNode(list1); 
  let n2 = copyNode(list2); 
  let head = null;
  let tail = null;
  while(n1 && n2) {
    if (n1.val < n2.val) {
      if (head) {
        tail.next = n1;
        tail = n1;
      } else {
        head = n1;
        tail = head;
      }
      n1 = copyNode(n1.next);
      continue;
    }

    if (n1.val > n2.val) {
      if (head) {
        tail.next = n2;
        tail = n2;
      } else {
        head = n2;
        tail = head;
      }
      n2 = copyNode(n2.next);
      continue;
    }

    if (n1.val === n2.val) {
      if (head) {
        tail.next = n1;
        n1 = copyNode(n1.next);
        tail.next.next = n2;
        tail = n2;
      } else {
        head = n1; 
        tail = head;
        n1 = copyNode(n1.next);
        tail.next = n2;
        tail = n2;
      }
      n2 = copyNode(n2.next);
      continue;
    }
  }

  if (n1) {
    if (head) tail.next = copyList(n1)
    else head = copyList(n1)
  } 
  if (n2) {
    if (head) tail.next = copyList(n2)
    else head = copyList(n2)
  } 
  return head;
};

function copyList(list) {
  let pointer = copyNode(list);
  let head = null;
  let tail = null;
  while (pointer) {
    if (head) {
      tail.next = pointer; 
      tail = pointer;
    } else {
      head = pointer;
      tail = head;
    } 
    pointer = copyNode(pointer.next);
  }
  return head;
}

function copyNode(node) {
  return node ? new ListNode(node.val, node.next) : null;
}


//  EXAMPLES
//  mergeTwoLists([1], [2])
//  [1,2]  
//  mergeTwoLists([1,2], [2])
//  [1,2,2]
//  mergeTwoLists([], [2])
//  [2]
//  mergeTwoLists([1,2], [3,4])
//  [1,2,3,4]

let list1 = LinkedList([1,2,4])
let list2 = LinkedList([1,3,4])
console.log(mergeTwoLists(list1, list2))