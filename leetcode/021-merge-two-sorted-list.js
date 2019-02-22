/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    if (l1 === null)
        return l2
    
    if (l2 === null) {
        return l1
    }
    
    // result list
    let result;
    let currRes;

    
    while (true) {
        if (!result) {
            if (l1.val < l2.val) {
                result = l1
                currRes = result
                l1 = l1.next
            } else {
                result = l2;
                currRes = result
                l2 = l2.next
            }
        } else {

            if (l1 === null) {
                currRes.next = l2
                break;
            }
            if (l2 === null) {
                currRes.next = l1
                break;
            }
            if (l1.val < l2.val) {
                currRes.next = l1
                l1 = l1.next
            } else {
                currRes.next = l2
                l2 = l2.next
            }
            currRes = currRes.next
        }
    }    
    
    return result
};