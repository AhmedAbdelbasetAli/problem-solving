/* Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]

Output: [2,1,4,3]

Explanation:

Example 2:

Input: head = []

Output: []

Example 3:

Input: head = [1]

Output: [1]

Example 4:

Input: head = [1,2,3]

Output: [2,1,3]

 Constraints:

The number of nodes in the list is in the range [0, 100].
0 <= Node.val <= 100 */ 

public ListNode swapPairs(ListNode head) {
    ListNode dummy = new ListNode(0); // Step 1: Create dummy node
    dummy.next = head;
    ListNode current = dummy; // Step 2: Initialize current pointer
    
    while (current.next != null && current.next.next != null) {
        ListNode first = current.next;
        ListNode second = current.next.next;
        ListNode nextPair = second.next;
        
        // Step 3: Rewire pointers
        current.next = second; // Link previous node to B
        second.next = first;   // Link B to A
        first.next = nextPair; // Link A to next pair
        
        current = first; // Move to the end of the swapped pair
    }
    
    return dummy.next; // New head is after dummy
}
