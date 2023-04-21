import { LinkedList } from "../../utils/linked-list.mjs"

// create list [1,2,3,4,5]
let head = LinkedList([1,2,3,4,5]);
// make node point to "3"
let node = head.next.next;
deleteNode(node);
console.log(head);

// challenge starts here
function deleteNode(node) {
  node.val = node.next.val; 
  node.next = node.next.next;
};