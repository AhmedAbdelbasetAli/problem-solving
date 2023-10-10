Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Constructs a binary tree from its preorder and inorder traversals.
 * @param {number[]} preorder - The preorder traversal of the tree.
 * @param {number[]} inorder - The inorder traversal of the tree.
 * @returns {TreeNode} - The root of the constructed binary tree.
 */
function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null; // Empty arrays indicate an empty subtree.
    }

    const rootVal = preorder[0]; // The first element in preorder is the root value.
    const root = new TreeNode(rootVal);

    // Find the index of the root value in the inorder traversal.
    const rootIndex = inorder.indexOf(rootVal);

    // Recursively construct the left and right subtrees.
    root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1));

    return root;
}
