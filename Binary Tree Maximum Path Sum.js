A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

  class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function maxPathSum(root) {
    // Initialize a variable to keep track of the global maximum path sum.
    let maxSum = -Infinity;

    // Define a recursive helper function to compute the maximum path sum
    // starting from a given node.
    function maxPathSumFromNode(node) {
        if (!node) {
            return 0;
        }

        // Recursively compute the maximum path sums from the left and right subtrees.
        const leftMax = Math.max(maxPathSumFromNode(node.left), 0);
        const rightMax = Math.max(maxPathSumFromNode(node.right), 0);

        // Update the global maximum path sum if a new maximum is found.
        maxSum = Math.max(maxSum, node.val + leftMax + rightMax);

        // Return the maximum path sum starting from this node, considering only one child.
        return node.val + Math.max(leftMax, rightMax);
    }

    // Start the recursive computation from the root node.
    maxPathSumFromNode(root);

    return maxSum;
}
