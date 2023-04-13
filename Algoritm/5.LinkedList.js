


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
    if (prevNode === null) {
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
    while (last.next) {
      last = last.next
    }
    last.next = newNode
  }

  // deleteNode
  deleteNode(key) {
    let temp = this.head

    // checkout first node
    // console.log(`temp: ${temp.data}`)
    // console.log(`temp.next: ${temp.next.data}`)
    // console.log(temp === key)
    if (temp === key || temp.data === key) {
      this.head = temp.next
      temp = null
    }

    // chekcout next nodes
    while (temp) {
      // console.log(`temp: ${temp}`)
      // console.log("temp.data: "+temp.data)
      // console.log("key: "+key)
      // console.log("temp: " + temp)
      if (temp.data === key) {
        console.log('tempdata=key')
        break
      }
      let prev = temp
      console.log(`prev.data: ${prev.data}`)
      console.log("prev: "+ prev)
      temp = temp.next

      if (temp === null) return

      prev.next = temp.next
      temp = null
    }
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
llist.append("Juma")
llist.printList()
console.log("-----------")
llist.deleteNode("Juma")
llist.printList()
