class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class QueueLinkedList{
    constructor(){
        this.head =null
        this.size =0
    }
    isEmpty(){
        return this.head ===null
    }
    enqueue(value){
        const node = new Node(value)
        if(!this.head){
            this.head = node
        }else{
            let curr=  this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = node
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }else{
            this.head = this.head.next
        }
    }
    display(){
        let curr = this.head
        let values =''
        while(curr){
            values +=`${curr.value} `
            curr = curr.next
        }
        console.log(values);
    }
}

const queue = new QueueLinkedList()
queue.enqueue(109)
queue.enqueue(243)
queue.enqueue(234)
queue.dequeue()
queue.display()