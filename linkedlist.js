class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
function insertNodeAtPosition(head, data, position) {

    let aNode = new Node(data);
    previousNode = getNodeAtPosition(head, position - 1);
    nextNode = getNodeAtPosition(position + 1);
    aNode.next = previousNode.next;
    previousNode.next = aNode;
    return head
}
function getNodeAtPosition(linkedList, postion){
    let counter = 0
    let node = linkedList.head;
    while (linkedList){
        if (counter === postion){
            return node.value;
        }
        counter++
        node = node.next
    }
    return null
}