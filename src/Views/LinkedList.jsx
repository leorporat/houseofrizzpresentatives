class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    add(name, location) {
        var addNode = new ListNode(name, location);
        var current;
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }


}