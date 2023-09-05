Given the head of a singly linked list, reverse the list, and return the reversed list.
  var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    const reversedHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return reversedHead;
};
