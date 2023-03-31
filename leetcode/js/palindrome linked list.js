function getValues(node) {
  const values = [];
  while(node) {
    values.push(node.val);
    node = node.next;
  }
  return values;
}


var isPalindrome = function(head, values=getValues(head)) {
  while(head) {
    if (head.val !== values.pop()) return false;
    head = head.next;
  }
  return true;
};  
