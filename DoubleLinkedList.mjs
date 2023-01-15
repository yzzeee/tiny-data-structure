class Node {
  constructor(data = null) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error('index out of range!');
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head !== null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (index === this.count) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.prev = currentNode;
      newNode.next = currentNode.next;
      currentNode.next.prev = newNode;
      currentNode.next = newNode;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('index out of range!');
    }

    let deletedNode;
    if (index === 0) { // 맨 앞의 노도 삭제
      deletedNode = this.head;
      if (this.head.next === null) { // 기존에 노드가 하나인 경우
        this.head = null;
        this.tail = null;
      } else {
        this.head.next.prev = null;
        this.head = this.head.next;
      }
    } else if (index === this.count - 1) { // 맨 뒤의 노드 삭제
      deletedNode = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
    } else { // 중간 노드 삭제
      let currentNode = this.head;
      deletedNode = currentNode.next;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
    }

    this.count--;
    return deletedNode;
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error('index out of range!');
    }
    let currentNode = this.head;
    for(let i = 0; i < index - 1; i++) {
      currentNode.next = currentNode;
    }
    return currentNode;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = '[';
    while (currentNode) {
      text += currentNode.data;
      if (currentNode.next !== null) {
        text += ','
      }
      currentNode = currentNode.next;
    }
    text += ']';
    console.log(text);
  }
}

export {Node, DoubleLinkedList};
