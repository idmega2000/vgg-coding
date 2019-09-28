
function reverse(head) {
let node = head,
      previous,
      holder;

  while (node) {
    holder = node.next;
    node.next = previous;
    previous = node;
    node = holder;
  }

  return previous;

}
