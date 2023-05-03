class Node{
    constructor(key,value){
        this.value = value
        this.next = null
        this.key = key
    }
}

class HashTable{
    constructor(size) {
        this.table =new Array(size)
        this.size = size
    }
    hash(key){
        let total =0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
       const bucket = this.table[index]
       if(!bucket){
         const node = new Node(key,value)
         this.table[index] = node
         return
       } else{
            let currentNode = bucket
            while(currentNode){
                if(currentNode.key === key){
                    currentNode.value = value
            }else{
                if(!currentNode.next){
                    const node = new Node(key,value)
                    currentNode.next = node
                    return

                }
            }
            currentNode = currentNode.next
       }
    }

    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        let currentNode = bucket
        while(currentNode){
            if(currentNode.key == key){
                return console.log (currentNode.value)

            }
            currentNode = currentNode.next

        }
        return 'there is no such key'
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        let currentNode = bucket
        while(currentNode.next){
            if(currentNode.key == key){
                
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            let currentNode = this.table[i]
            while(currentNode){
                console.log(i,currentNode.key,currentNode.value);
                currentNode = currentNode.next
            }

            
        }
    }
}

const hash = new HashTable(40)

hash.set('name','prayag')
hash.set('mane','hey')
hash.set('mnae','sdfsdf')
hash.get('mane')
hash.display()