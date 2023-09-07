Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

 function hasCycle(head) {
    if (!head || !head.next) {
        return false; // No cycle if there are less than 2 nodes
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; // No cycle if the fast pointer reaches the end
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true; // Cycle detected
}
