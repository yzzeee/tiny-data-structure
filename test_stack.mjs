import {Stack} from './Stack.mjs';

const stack = new Stack();

stack.push(0);
console.log(stack.peek().data);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.isEmpty());
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data);
console.log(stack.pop()?.data ?? null);
console.log(stack.isEmpty());


