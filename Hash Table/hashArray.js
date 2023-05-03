class HashTable{
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total= 0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index  = this.hash(key)
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            let sameItemKey = bucket.find(item => item[0] === key)
            if(sameItemKey){
                sameItemKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }
    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let sameItemKey = bucket.find(item=>item[0] === key)
            if(sameItemKey){
                return console.log(sameItemKey[1]);
            }
            return 'there is no such key found'
        }
    }
    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            let sameItemKey = bucket.find(item => item[0]=== key)
            if(sameItemKey){
                bucket.splice(bucket.indexOf(sameItemKey),1)
            }
            return 'there is no such key'
        }
    }
    display(){
            for(let i =0;i<this.table.length;i++){
                if(this.table[i]){
                    console.log(i,this.table[i]);
                }
            }
        
    } 
}

const hash = new HashTable(50)
hash.set('name','prayag')
hash.set('plac','kannur')
hash.set('age',34)
hash.get('age')
hash.remove('plac')
hash.display()