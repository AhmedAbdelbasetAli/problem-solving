You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reorderList(head) {
    if (!head || !head.next) {
        return;
    }

    // Find the middle of the linked list.
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list.
    let prev = null;
    let curr = slow.next;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    slow.next = null;

    // Merge the first half and the reversed second half alternately.
    let first = head;
    let second = prev;
    while (second) {
        const temp1 = first.next;
        const temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
}
