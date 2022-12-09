/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (!head) return false;

  let fast = head;
  let slow = head;

  do {
    if (fast.next === null || fast.next.next === null) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
  } while (fast !== slow);

  return true;
};
