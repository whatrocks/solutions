function ListNode(val) {
    this.val = val;
    this.next = null;
}


var isPalindrome = function(head) {
    if (!head) {
        return true;
    }
 
    if (!head.next) {
        return true
    }

    let reversedHead = new ListNode(head.val)
    let current = head

    while (true) {
        if (!current.next) {
            break;
        }
        current = current.next
        let temp = new ListNode(current.val)
        temp.next = reversedHead
        reversedHead = temp
    }

    // Check each
    let current_og = head
    let current_re = reversedHead

    if (current_og.val !== current_re.val) {
        return false
    }

    while (true) {
        if (!current_og.next && !current_re.next) {
            break;
        }
        current_og = current_og.next
        current_re = current_re.next

        if (current_og.val !== current_re.val) {
            return false
        }

    }


    return true
};


