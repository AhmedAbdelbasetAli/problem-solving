Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

  class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(p, q) {
    if (!p && !q) {
        return true; // Both trees are empty, so they are the same.
    }
    
    if (!p || !q) {
        return false; // One tree is empty while the other is not, so they are different.
    }

    // Compare the values of the current nodes and recursively check left and right subtrees.
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
