class BinaryTree {
  constructor(data, leftSubTree = null, rightSubTree = null) {
    this.data = data;
    this.leftSubTree = leftSubTree;
    this.rightSubTree = rightSubTree;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = data;
  }

  getLeftSubTree() {
    return this.leftSubTree;
  }

  getRightSubTree() {
    return this.rightSubTree;
  }

  setLeftSubTree(tree) {
    this.leftSubTree = tree;
  }

  setRightSubTree(tree) {
    this.rightSubTree = tree;
  }

  preOrderTraversal(tree) {
    if (tree == null) return;
    console.log(tree.data);
    this.preOrderTraversal(tree.getLeftSubTree());
    this.preOrderTraversal(tree.getRightSubTree())
  }

  inOrderTraversal(tree) {
    if (tree == null) return;
    this.inOrderTraversal(tree.getLeftSubTree());
    console.log(tree.data);
    this.inOrderTraversal(tree.getRightSubTree())
  }

  postOrderTraversal(tree) {
    if (tree == null) return;
    this.postOrderTraversal(tree.getLeftSubTree());
    this.postOrderTraversal(tree.getRightSubTree())
    console.log(tree.data);
  }
}

export {BinaryTree};
