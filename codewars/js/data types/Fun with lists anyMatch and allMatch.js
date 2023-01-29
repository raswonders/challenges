function anyMatch(head, predicate) {
  if (head === null) return false;
  return predicate(head.data) ? true : anyMatch(head.next, predicate);
}

function allMatch(head, predicate) {
  if (head === null) return true;
  return !predicate(head.data) ? false : allMatch(head.next, predicate); 
}