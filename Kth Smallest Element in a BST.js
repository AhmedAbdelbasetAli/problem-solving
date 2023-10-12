Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Helper function to perform an in-order traversal of the binary tree and find the kth smallest element.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {object} state - An object to maintain the state (count and result).
 * @param {number} k - The value of k.
 */
function kthSmallestHelper(root, state, k) {
    if (!root || state.count >= k) {
        return;
    }

    // Recursively traverse the left subtree
    kthSmallestHelper(root.left, state, k);

    // Increase the count
    state.count++;

    // If we've found the kth smallest element, update the result
    if (state.count === k) {
        state.result = root.val;
        return;
    }

    // Recursively traverse the right subtree
    kthSmallestHelper(root.right, state, k);
}

/**
 * Find the kth smallest element in a binary search tree.
 * @param {TreeNode} root - The root of the binary search tree.
 * @param {number} k - The value of k.
 * @returns {number} - The kth smallest element.
 */
function kthSmallest(root, k) {
    const state = { count: 0, result: null };
    kthSmallestHelper(root, state, k);
    return state.result;
}
