/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    if (!root.left && !root.right) {
        return 1;
    }
    let min = 1;
    let queue = [[root, 1]];

    while (queue.length) {
        let current = queue.shift();
        let node = current[0];
        let depth = current[1]
        if (!node.left && !node.right) {
            min = depth
            break;
        }
        if (node.left) {
            queue.push([node.left, depth + 1])
        }
        if (node.right) {
            queue.push([node.right, depth + 1])
        }
    }

    return min

};