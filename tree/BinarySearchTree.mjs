import {BinaryTree} from "./BinaryTree.mjs";

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(data) {
    if (this.root === null) { // 처음 삽입하는 경우
      this.root = new BinaryTree(data);
      return;
    }

    let currentNode = this.root;
    let parentNode = null;

    while(currentNode !== null) {
      parentNode = currentNode;
      if (currentNode.getData() > data) {
        currentNode = currentNode.getLeftSubTree();
      } else if (currentNode.getData() < data) {
        currentNode = currentNode.getRightSubTree();
      } else {
        return;
      }
    }

    let newNode = new BinaryTree(data);

    if (parentNode.getData() > data) {
      parentNode.setLeftSubTree(newNode);
    } else {
      parentNode.setRightSubTree(newNode);
    }
  }

  search(targetData) {
    let currentNode = this.root;
    while(currentNode !== null) {
      if(currentNode.getData() === targetData) {
        return currentNode;
      } else if (currentNode.getData() > targetData) {
        currentNode = currentNode.getLeftSubTree();
      } else {
        currentNode = currentNode.getRightSubTree();
      }
    }
    return null;
  }
}

export {BinarySearchTree};
