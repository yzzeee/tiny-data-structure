import {Node, DoubleLinkedList} from "./DoubleLinkedList.mjs";

const list = new DoubleLinkedList();

console.log('=============== ::: new Node(data)');

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

console.log('=============== ::: insertAt(index, data)');

const linkedList = new DoubleLinkedList();
linkedList.insertAt(0, 0);
linkedList.printAll();
linkedList.insertAt(1, 1);
linkedList.printAll();
linkedList.insertAt(2, 2);
linkedList.printAll();
linkedList.insertAt(3, 3);
linkedList.printAll();
linkedList.insertAt(4, 4);
linkedList.printAll();

console.log('=============== ::: insertLast(data)');
linkedList.insertLast(5);
linkedList.printAll();
linkedList.insertLast(6);
linkedList.printAll();

console.log('=============== ::: deleteAt(index)');
linkedList.deleteAt(0);
linkedList.printAll();
linkedList.deleteAt(5);
linkedList.printAll();

console.log('=============== ::: deleteLast()');
linkedList.deleteLast();
linkedList.printAll();

console.log('=============== ::: getNodeAt(index)');
console.log(linkedList.getNodeAt(1).data);
console.log(linkedList.getNodeAt(3).data);

console.log('=============== ::: clear()');
linkedList.clear();
linkedList.printAll();
