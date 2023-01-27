// iterative solution
function countIf(head, predicate) {
  const values = [];
  while(head) {
    values.push(head.data);
    head = head.next;
  }
  
  return values
          .filter(predicate)
          .length
}

// recursive solution
function countIf(head, predicate, count=0) {
  if (head === null) return count;
  count += predicate(head.data) ? 1 : 0;
  
  return countIf(head.next, predicate, count);
}