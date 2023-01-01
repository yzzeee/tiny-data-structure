import {LinkedList} from './LinkedList.mjs';

class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  push(data) {
    this.linkedList.insertAt(0, data);
  }

  pop() {
    try {
      return this.linkedList.deleteAt(0);
    } catch {
      return null;
    }
  }

  peek() {
    return this.linkedList.getNodeAt(0);
  }

  isEmpty() {
    return this.linkedList.count === 0;
  }
}

export {Stack};
