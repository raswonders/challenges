function zipWith(fn, headA, headB) {
  return (headA && headB) 
    ? new Node(fn(headA.value, headB.value), zipWith(fn, headA.next, headB.next))
    : null;
}