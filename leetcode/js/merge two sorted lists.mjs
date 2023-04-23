import { LinkedList, ListNode } from "../../utils/linked-list.mjs";

function mergeTwoLists(list1, list2) {
  let dummy = new ListNode(0);
  let tail = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1) tail.next = list1;
  if (list2) tail.next = list2;
  return dummy.next;
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