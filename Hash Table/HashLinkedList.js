class Node{
    constructor(key,value){
        this.value =value
        this.next = null
        this.key = key
    }
}

class  HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let hash=0
        for(let i=0;i<key.length;i++){
            hash +=key.charCodeAt(i)
        }
        return hash%this.size
    }
    set(key,value){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket){
            this.table[index] =new Node(key,value)
        }else if(bucket.key == key){
                bucket.value= value
        }else{
            let curr = bucket
            while(curr.next){
                curr =curr.next
            }
            curr.next = new Node(key,value)
        }

    }
    get(key){
        const index= this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            if(bucket.key === key){
                return console.log(bucket.value);
            }else{
                let curr = bucket
                while(curr){
                    if(curr.next.key == key){
                        return console.log(curr.next.value);
                    }
                    curr=curr.next
                }
            }
        }
    }
    remove(key){
        const index = this.hash(key)
        const bucket  = this.table[index]
        if(bucket.key ==key){
            this.table[index] = bucket.next
        }else{
            let curr = bucket
            while(curr.next){
                if(curr.next.key== key){
                    curr.next = curr.next.next
                }
                curr= curr.next
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                let curr=this.table[i]
                while(curr){
                    console.log(i,curr.key,curr.value);
                    curr = curr.next
                }
            }
        }
    }

}
const hash = new HashTable(34)
hash.set('name','prayah')
hash.set('mane','hseyr')
hash.set('name','prayag')
hash.get('name')
hash.remove('name')
hash.display()