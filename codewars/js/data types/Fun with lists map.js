function map(head, f) {
  return head 
    ? new Node(f(head.data), map(head.next, f))
    : null;
}