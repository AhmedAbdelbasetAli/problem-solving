Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

 class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Find the lowest common ancestor (LCA) of two nodes in a binary search tree (BST).
 * @param {TreeNode} root - The root of the BST.
 * @param {TreeNode} p - The first node.
 * @param {TreeNode} q - The second node.
 * @returns {TreeNode} - The LCA node.
 */
function lowestCommonAncestor(root, p, q) {
    if (!root) return null;

    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
}
