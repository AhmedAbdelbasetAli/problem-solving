Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Checks if tree with root1 is a subtree of tree with root2.
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @returns {boolean}
 */
function isSubtree(root1, root2) {
    if (!root1) {
        return false; // If root1 is null, it cannot contain a subtree.
    }
    
    // Check if root1 and root2 are identical trees.
    if (isIdentical(root1, root2)) {
        return true;
    }
    
    // Recursively check the left and right subtrees of root1.
    return isSubtree(root1.left, root2) || isSubtree(root1.right, root2);
}

/**
 * Checks if two trees are identical.
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 * @returns {boolean}
 */
function isIdentical(node1, node2) {
    if (!node1 && !node2) {
        return true; // Both nodes are null, indicating an empty subtree.
    }
    
    if (!node1 || !node2) {
        return false; // One node is null, but the other is not, so they are not identical.
    }
    
    if (node1.val !== node2.val) {
        return false; // Node values are different, so the trees are not identical.
    }
    
    // Recursively check the left and right subtrees.
    return isIdentical(node1.left, node2.left) && isIdentical(node1.right, node2.right);
}

