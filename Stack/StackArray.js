class Stack{
    constructor(){
        this.item =[]
        this.size = 0
    }
    isEmpty(){
        this.item.length ===0
    }
    push(value){
        return this.item.push(value)
    }
    pop(){
        return this.item.pop()
    }
    peek(){
        return console.log(this.item[this.item.length-1]);
    }
    display(){
        if(this.isEmpty()){
            console.log('stack is empty');
        }else[
            console.log(this.item.toString())
        ]
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
stack.display()