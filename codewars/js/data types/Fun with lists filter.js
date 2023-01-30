function filter(head, predicate) {
  let newHead = null; 
  let newTail = null;
  while(head) {
    if (predicate(head.data)) {
      let newNode = structuredClone(head);
      newNode.next = null;
      newHead = newHead || newNode;
      if (newTail) newTail.next = newNode;
      newTail = newNode;
    }
    head = head.next;
  }
  return newHead;
}