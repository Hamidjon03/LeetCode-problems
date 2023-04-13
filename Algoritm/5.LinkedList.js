


class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  head = null

  // printList method
  printList() {
    let temp = this.head
    while (temp) {
      console.log(temp.data)
      temp = temp.next
    }
  }

  // push method
  push(newData) {
    let newNode = new Node(newData)
    newNode.next = this.head
    this.head = newNode
  }

  // insetAfter method
  insertAfter(prevNode, newData) {
    if (prevNode === null){
      console.log("Tugun mavjud emas")
    }
    let newNode = new Node(newData)
    newNode.next = prevNode.next
    prevNode.next = newNode
  }

  // append method
  append(newData) {
    let newNode = new Node(newData)
    if (this.head === null) {
      this.head = newNode
    }
    let last = this.head
    while(last.next){
      last = last.next
    }
    last.next = newNode
  }

}

let llist = new LinkedList()

llist.head = new Node('Dushanba')
let tuesday = new Node('Seshanba')
let wednesday = new Node('Chorshanba')

llist.head.next = tuesday
tuesday.next = wednesday

// llist.insertAfter(llist.head.next, "Yangi qiymat")
llist.append("Payshanba")
llist.printList()
