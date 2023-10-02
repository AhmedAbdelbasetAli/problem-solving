Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
function serialize(root) {
    if (!root) {
        return 'null';
    }
    
    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);
    
    return root.val + ',' + leftSerialized + ',' + rightSerialized;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function deserialize(data) {
    const nodes = data.split(',');
    
    function buildTree() {
        const val = nodes.shift();
        
        if (val === 'null') {
            return null;
        }
        
        const node = new TreeNode(parseInt(val));
        node.left = buildTree();
        node.right = buildTree();
        
        return node;
    }
    
    return buildTree();
}
