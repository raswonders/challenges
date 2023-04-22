function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head); 
  const length = getLength(head);
  
  let node = dummy;
  for (let i = 0; i <= length - n - 1; i++ ) {
    node = node.next;
  }
  node.next = node.next.next;
  return dummy.next;
}

function getLength(head) {
  let node = head;
  let length = 0;
  while (node !== null) {
    length++;
    node = node.next; 
  }
  return length;
}