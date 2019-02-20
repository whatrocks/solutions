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
    // More explicit BFS approach
    if (!root) {
        return 0;
    }
    let depth = 1;
    let level = [root];
    while (True) {
        let next_level = []
        for (node of level) {
            if (!node.left && !node.right) {
                return depth
            }
            if (node.left) {
                next_level.push(node.left)
            }
            if (node.right) {
                next_level.push(node.right)
            }
        }
        level = next_level
        depth += 1
    }

    // Original working answer
    //     if (!root) {
//         return 0;
//     }
//     if (!root.left && !root.right) {
//         return 1;
//     }
//     let min = 1;
//     let queue = [[root, 1]];

//     while (queue.length) {
//         let current = queue.shift();
//         let node = current[0];
//         let depth = current[1]
//         if (!node.left && !node.right) {
//             min = depth
//             break;
//         }
//         if (node.left) {
//             queue.push([node.left, depth + 1])
//         }
//         if (node.right) {
//             queue.push([node.right, depth + 1])
//         }
//     }

//     return min
};