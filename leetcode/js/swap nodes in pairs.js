function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function swapPairs(head) {
  if (!head) return null;
  if (!head.next) return head;
  
  let temp = head.next;
  head.next = swapPairs(head.next.next);
  temp.next = head;
  return temp;
};

function strToList(str) {
  if (str.length === 0) return null;

  return new ListNode(str[0], strToList(str.slice(1)));
}


console.log(swapPairs(strToList("1234")));
// 1,2,3,4