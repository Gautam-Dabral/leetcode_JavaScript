var deleteDuplicates = function(head) {
    let temp = head;
    if (head === []) return head;
    while (temp && temp.next !== null){
        if (temp.val === temp.next.val){
            temp.next = temp.next.next;
        } else temp = temp.next;
    }
    return head;
};

