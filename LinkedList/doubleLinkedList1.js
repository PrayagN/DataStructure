class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  insert(value, index) {
    const node = new Node(value);
    if(index<0||index>this.size){
        console.log('invalide index');
    }
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else if (index == 0) {
        node.next = this.head 
        this.head.prev = node
        this.head = node
    }else if(index ==this.size){
        this.tail.next = node
        node.prev = this.tail
        this.tail = node
    }else{
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev = prev.next
        }
        node.next = prev.next
        node.prev = prev        
        prev.next.prev = node
        prev.next = node
    }
    this.size++
  }

  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let values = "";
      while (curr) {
        values += `${curr.value} `;
        curr = curr.next;
      }
      console.log(values);
    }
  }
  reverse(){
    if(this.isEmpty()){
        console.log('list is empty');
    }else{
        let curr = this.tail
        let values = ''
        while(curr){
            values +=`${curr.value} `
            curr = curr.prev
        }
        console.log(values);
    }
  }
  remove(index){
      let removeNode 
    if(this.isEmpty()){
        console.log('list is empty');
    }else if(index == 0){
        this.head= this.head.next
    }else if(index == this.size-1) {
        this.tail = this.tail.prev    
        this.tail.next = null
    }else{
        let curr = this.head 
        for(let i=0;i<index-1;i++){
            curr = curr.next
        }
           removeNode = curr.next
           curr.next.prev = curr 
           curr.next = removeNode.next
    }
    this.size--
  }
  search(value){
    if(this.isEmpty()){
        console.log('list is empty');
    }else if(value == this.head.value){
        console.log('kitimone');
    }else if(value == this.tail.value){
        console.log('kiti');
    }else{
        let curr = this.head 
        while(curr && curr.next != value){
            curr = curr.next
        }
        console.log('yes');
    }
    // console.log('not have that value');
  }
}
const list = new DoublyLinkedList();
const arr = [1,2,3,4,5]
for(x in arr){
    list.push(arr[x])
}

list.print();
// list.reverse()
