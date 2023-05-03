class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head= null
        this.tail= null
        this.size =0
    }
    isEmpty(){
        return this.size===0
    }
    unshift(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next= this.head
            this.head = node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr=this.head
            let values = ''
            while(curr){
                values +=`${curr.value} `
                curr=curr.next
            }
            console.log(values);

        }
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    removeFront(){
        let remove
        if(this.isEmpty()){
            return null
        }else{
            remove = this.head
            this.head = this.head.next
        }
        this.size--
        return remove
    }
    removeLast(){
        if(this.isEmpty()){
            return null
        }else if(this.size ===1){
            this.head = null
            this.tail = null
        }else{
            let prev=this.head
            while(prev.next !==this.tail){
                prev=prev.next
            }
            prev.next = null
            this.tail  = prev
        }
        this.size--
    }
    replace(value,change){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let curr = this.head
            while(curr.next.value!=change){
                curr = curr.next
            }
            curr.next.value =value
        }
    }
}
const list = new LinkedList()

list.unshift(10)
list.unshift(120)
list.push(123)
// list.removeFront()
// list.removeLast()
list.replace(12,10)
list.print()