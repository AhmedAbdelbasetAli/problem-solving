Given the root of a binary tree, invert the tree, and return its root.

  class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertTree(root) {
    if (root === null) {
        return null;
    }

    // Swap the left and right subtrees recursively.
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    // Update the root node with the swapped subtrees.
    root.left = right;
    root.right = left;

    return root;
}
