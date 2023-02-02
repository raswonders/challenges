function reduce(head, reducer, acc) {
  while(head) {
    acc = reducer(acc, head.data)
    head = head.next;
  }
  return acc;
}

// recursive solution
function reduce(head, reducer, acc) {
  return head 
    ? reduce(head.next, reducer, reducer(acc, head.data))
    : acc;
}