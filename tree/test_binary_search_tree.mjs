import {BinarySearchTree} from "./BinarySearchTree.mjs";

let binarySearchTree = new BinarySearchTree();
console.log("insert")

binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(31);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(12);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(33);
binarySearchTree.insert(24);
binarySearchTree.insert(35);
binarySearchTree.insert(20);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

console.log("search")
console.log(binarySearchTree.search(6));
console.log(binarySearchTree.search(1));
