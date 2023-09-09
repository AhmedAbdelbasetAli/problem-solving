You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const mergeTwoLists = (l1, l2) => {
        const dummy = new ListNode(-1);
        let current = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                current.next = l1;
                l1 = l1.next;
            } else {
                current.next = l2;
                l2 = l2.next;
            }
            current = current.next;
        }

        current.next = l1 || l2;
        return dummy.next;
    };

    const mergeLists = (lists, left, right) => {
        if (left === right) {
            return lists[left];
        }

        const mid = Math.floor((left + right) / 2);
        const leftMerged = mergeLists(lists, left, mid);
        const rightMerged = mergeLists(lists, mid + 1, right);
        return mergeTwoLists(leftMerged, rightMerged);
    };

    if (!lists || lists.length === 0) {
        return null;
    }

    return mergeLists(lists, 0, lists.length - 1);
}
