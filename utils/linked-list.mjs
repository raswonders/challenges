export class ListNode { 
  constructor(val, next) {
    this.val = val;
    this.next = next || null; 
  }
}
  
export function LinkedList(arr) {
  return (arr.length === 0) ? 
    null :
    new ListNode(arr.shift(), LinkedList(arr));
}