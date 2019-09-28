
class Node {
    constructor(data, next = null) {
        this.data = data,
        this.next = next
    }
}

function insertNodeAtPosition(head, data, position) {

    let aNode = new Node(data);
    let previousNode = getNodeAtPosition(head, position - 1);
    let nextNode = getNodeAtPosition(position + 1);
    aNode.next = previousNode.next;
    previousNode.next = aNode;
    return head
}


function getNodeAtPosition(linkedList, postion){
    let counter = 0
    let node = linkedList;
    while (node){
        if (counter === postion){
            return node;
        }
        counter ++
        node = node.next
    }
    return null
}
