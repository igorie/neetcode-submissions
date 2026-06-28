/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let node = head;
        let index = 0;
        const map = new WeakMap()

        while (node) {
            const hasCycle = map.has(node);
            if (hasCycle) {
                return hasCycle;
            }

            map.set(node, index);
            node = node.next;
            index++;
        }

        return false;
    }
}
