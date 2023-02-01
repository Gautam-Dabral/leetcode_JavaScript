var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    let curr = res;
    let carry = 0;
    while (l1 && l2){
        let currSum = l1.val + l2.val + carry;
        l1 = l1.next;
        l2 = l2.next;
        if (currSum > 9){
            carry = 1;
            currSum -= 10;
        } else {
            carry = 0;
        }
        let newNode = new ListNode(currSum);
        curr.next = newNode;
        curr = curr.next;
    }
    while (l1){
        l1.val += carry;
        carry = 0;
        if (l1.val > 9){
            carry = 1;
            l1.val -= 10;
        }
        curr.next = l1;
        l1 = l1.next;
        curr = curr.next;
    }
    while (l2){
        l2.val += carry;
        carry = 0;
        if (l2.val > 9){
            carry = 1;
            l2.val -= 10;
        }
        curr.next = l2;
        l2 = l2.next;
        curr = curr.next;
    }
    if (carry !== 0){
        let newNode = new ListNode(1);
        curr.next = newNode;
    }
    return res.next;
};