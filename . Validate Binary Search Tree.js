Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left 
subtree
 of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Helper function to perform an in-order traversal of the binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number[]} result - An array to store the in-order traversal result.
 */
function inOrderTraversal(root, result) {
    if (!root) {
        return;
    }
    inOrderTraversal(root.left, result);
    result.push(root.val);
    inOrderTraversal(root.right, result);
}

/**
 * Check if a binary tree is a valid binary search tree (BST).
 * @param {TreeNode} root - The root of the binary tree.
 * @returns {boolean} - True if the tree is a valid BST, false otherwise.
 */
function isValidBST(root) {
    const result = [];
    inOrderTraversal(root, result);
    
    // Check if the in-order traversal result is sorted in ascending order.
    for (let i = 1; i < result.length; i++) {
        if (result[i] <= result[i - 1]) {
            return false;
        }
    }
    
    return true;
}
