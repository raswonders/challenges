function reverseList(head, prev=null) {
  // if LinkedList is empty
  if (!head) return null;
  // if it's last node 
  if (!head.next) {
    head.next = prev;
    return head;
  }

  let temp = head.next;
  head.next = prev;
  return reverseList(temp, head)
};