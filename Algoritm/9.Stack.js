// Stack va Rekursiya

class Stack {
  stack = [];

  // bo'sh ekanligini tekshirish
  isEmpty(){
    console.log(this.stack.length === 0)
  }

  // element qo'shish
  push(data){
    this.stack.unshift(data)
    console.log("Item added")
  }

  // element sug'urib olish
  pop() {
    if(this.stack.length === 0){
      console.log('This stack is Empty')
    }
    this.stack.shift()
    console.log("Item deleted")
  }

  // Eng ustki elementni ko'rish
  peek(){
    if (this.stack.length === 0) {
      console.log('This stack is Empty')
    }
    console.log(this.stack[0])
  }

}


let stack = new Stack()
// stack.isEmpty()
stack.push(7)
stack.peek()




function fact(x){
  if(x == 1){
    return '1'
  } else {
    return x * fact(x-1)
  }
}

console.log(fact(5))