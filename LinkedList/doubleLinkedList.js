class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size =0;
    }
    isEmpty(){
        return this.size ===0;
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
            console.log('list is empty')
        }else{
            let curr = this.head
            let values =''
            while(curr){
                values += `${curr.value} `
                curr = curr.next
            }
            console.log(values);
        }
    }
    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head  =node;
        }else{

            let curr =this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next = node
        }this.size++
    }
    shift(){
        let removeNode
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
             removeNode = this.head
            this.head = this.head.next
        }
        this.size--
        return removeNode

    }
    pop(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let removeNode = this.head
            let curr= this.head
            while(curr.next){
                removeNode = curr
                curr= curr.next
            }
            removeNode.next = null
            this.size--
        }
    }
    reverse(){
        if(this.isEmpty()){
            console.log('list is empty');
        }else{
            let prev = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next
            }
            this.head = prev
        }
    }
    insertI(value,index){
        if(index<0||index>this.size){
            console.log('invalid index');
        }else{
            const node = new Node(value)
            let prev= this.head
            for(let i=0;i<index-1;i++){
                    prev= prev.next
            }
            node.next =prev.next
            prev.next = node
            this.size++
        }

    }
    insertA(value,index){
        if(index<0||index>this.size){
            console.log('invalid index');
        }else{
            const node = new Node(value)
            let curr=this.head
            for(let i=0;i<index;i++){
                curr=curr.next
            }
            node.next= curr.next
            curr.next = node
            this.size++
        }
    }
    removeI(index){
        if(index<0||index>this.size){
            console.log('invalid index');
        }else{
            let curr= this.head
            let removeNode;
            for(let i=0;i<index-1;i++){
                curr= curr.next
            }
            removeNode = curr.next
            curr.next = removeNode.next
            this.size--
            return removeNode
        }
    }
    removeV(value){
        if(this.head.value = value){
            this.head = this.head.next
            this.size--

        }else{
            let prev = this.head
            while(prev.next && prev.next.value !=value){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return removeNode
            }
        }
    }
}
const list = new LinkedList()
list.unshift(10)
list.push(20)
list.push(30)
list.push(40)
// list.pop()
list.insertI(122,2)
// list.insertA(112,2)
// list.removeI(2)
// list.removeV(30)
// list.reverse()
list.print()