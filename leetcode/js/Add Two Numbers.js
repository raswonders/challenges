function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let res = String(getNumber(l1) + getNumber(l2));
  let resRev = res.split("").reverse().join("");
  return stringToList(resRev);
};

function listToString(head) {
  return head ? String(head.val) + listToString(head.next) : "";
}

function getNumber(head) {
  let str = listToString(head);
  let strRev = str.split("").reverse().join("");
  return BigInt(strRev);
}

function stringToList(str) {
  if (str.length === 0) return null;

  let val = BigInt(str[0]);
  return new ListNode(val, stringToList(str.slice(1)));
}

console.log(addTwoNumbers(stringToList("243"), stringToList("564")));