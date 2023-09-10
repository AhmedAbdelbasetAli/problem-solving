Given the head of a linked list, remove the nth node from the end of the list and return its head.
  class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    // Create a dummy node to simplify edge cases.
    const dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    // Move the first pointer n nodes ahead.
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until the first pointer reaches the end.
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Remove the nth node by updating the second pointer's next.
    second.next = second.next.next;

    return dummy.next; // Return the modified linked list.
}
