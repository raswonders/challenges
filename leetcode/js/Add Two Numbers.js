// problem ref. https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let res = getNumber(l1) + get(getNumber(l2);
    res.split("").reverse().join("");
    return stringToList(res);
};

function listToString(head) {
    if (head === null) {
        return "" 
    }

    return String(head.val) + listToString(head.next);
}

function getNumber(head) {
    let str = listToString(head);
    let strRev = str.split("").reverse().join("");
    return Number(strRev)
}

function stringToList(str) {
    if (str === null) return null;

    let val = Number(str[0]);
    return ListNode(val, stringToList(str.slice(1)))
}