class Queue{
    constructor(){
        this.item =[]
        this.size =0
    }
    isEmpty(){
        this.item.length ===0
    }
    enqueue(value){
        return this.item.push(value)
    }
    dequeue(){
        return this.item.shift()
    }
    display(){
        if(this.isEmpty()){
            console.log('queue is empty');
        }else{
            console.log(this.item.toString());
        }
    }
}
const queue = new Queue()
queue.enqueue(19)
queue.enqueue(23)
queue.enqueue(24)
queue.dequeue()
queue.display()