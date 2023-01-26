function indexOf(head, value, i=0) {
  if (head === null) return -1;
  return head.data === value ? i : indexOf(head.next, value, ++i);
}