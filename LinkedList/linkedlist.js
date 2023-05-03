// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   isEmpty() {
//     return this.size === 0;
//   }
//   getSize() {
//     return this.size;
//   }
//   unshift(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }
//   print() {
//     if (this.isEmpty()) {
//       console.log("list is empty");
//     } else {
//       let curr = this.head;
//       let values = "";
//       while (curr) {
//         values += `${curr.value} `;
//         curr = curr.next;
//       }
//       console.log(values);
//     }
//   }
//   push(value) {
//     const node = new Node(value);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let prev = this.head;
//       while (prev.next) {
//         prev = prev.next;
//       }
//       prev.next = node;
//     }
//     this.size++;
//   }
//   insert(value, index) {
//     const node = new Node(value);
//     if (index < 0 || index > this.size) {
//       console.log("invalid index");
//     } else if (index == 0) {
//       return this.unshift(value);
//     } else if (index == this.size) {
//       return this.push(value);
//     } else {
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next;
//       prev.next = node;
//       this.size++;
//     }
//   }
//   removeFrom(index) {
//     if (index < 0 || index >= this.size) {
//       return null;
//     }
//     let removeNode;
//     if (index == 0) {
//       removeNode = this.head
//       this.head = this.head.next
//     }else{
//       let prev =this.head
//       for(let i=0;i<index-1;i++){
//         prev = prev.next
//       }
//       removeNode = prev.next
//       prev.next = removeNode.next
//     }
//     this.size --
//     return removeNode.value
//   }
// }
// const list = new LinkedList();
// list.push(10);
// list.push(20);
// list.insert(23, 2);
// list.insert(232, 3);
// list.insert(100, 3);
// list.removeFrom(3)
// list.removeFrom(3)
// list.print();
// console.log(list.getSize());

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size == 0;
  }
  getSize(){
    return this.size
  }
  unshift(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      node.next = this.head
      this.head = node
    }
    this.size++
  }
  print(){
    if(this.isEmpty()){
      console.log('List is empty');
    }else{
      let curr= this.head;
      let values ='';
      while(curr){
        values +=`${curr.value} `
        curr = curr.next;
      }
      console.log(values);
    }

  }
  push(value){
    const node = new Node(value)
    if(this.isEmpty()){
      this.head = node
    }else{
      let prev = this.head
      while(prev.next){
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }
  insert(value,index){
    const node = new Node(value)
    if(index<0||index>this.size){
      console.log('invalid index');
      return 
    }else if(index ==1){
      return this.unshift(value)
    }else{
      console.log('jjsj');

      let prev = this.head
      for(let i=1;i<index-1;i++){
        prev = prev.next
      }
      node.next = prev.next;
      prev.next = node
    }
    this.size++
  }
  removeFrom(index){
    let removeNode
    if(index<0||index>=this.size){
      return null
    }else if(index == 0){
      removeNode = this.head
      this.head = this.head.next
    }else{
      let prev =this.head
      for(let i=0;i<index-1;i++){
        prev = prev.next
      }
      removeNode = prev.next 
      prev.next = removeNode.next
    }
    this.size--
    return removeNode.value
  }
  rmValue(value){
    if(this.isEmpty()){
      return null
    }
    if(this.head.value == value){
      this.head = this.head.next
      this.size --
      return value
    }else{
      let prev = this.head
      while(prev.next && prev.next.value != value){
        prev = prev.next
      }
      if(prev.next){
      let removeNode = prev.next
       prev.next = removeNode.next
       this.size --
       return value 
      }
      return null // only work when last node reaches
    }
  }
  insertAfter(value,index){
    const node = new Node(value)
    if(index<0||index>this.size){
      return null
    }else{
      let prev = this.head
      for(let i=0;i<index;i++){
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
    }
    this.size++
  }
  search(value){
    if(this.isEmpty()){
      return -1
    }else{
      let i=0;
      let curr = this.head
      while(curr){
        if(curr.value == value){
          return console.log(i);
        }
        curr = curr.next
        i++
      }
      return -1
    }
  }
}
const list = new LinkedList()
list.unshift(10)
//list.unshift(2)
//list.unshift(3)
// list.push(100)
// list.insert(12,2)
// list.removeFrom(4)
// list.rmValue(2)
// list.insertAfter(9,1)
list.search(12)
console.log(list.getSize());
//list.insert(12,3)
console.log(
  list.removeFrom(0)

);
list.print()
