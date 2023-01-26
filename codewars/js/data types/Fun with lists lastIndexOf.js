function lastIndexOf(head, value) {
  let lastIndex = -1;
  let index = 0;
  while(head) {
    if (head.data === value) lastIndex = index;
    index++;
    head = head.next;
  }
  return lastIndex;
}