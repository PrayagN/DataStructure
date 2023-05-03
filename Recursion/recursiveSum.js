let a=[1,2,3,4,5];
let n=0
let s=0
function sum(n){
    if(n>=a.length){
        return 0;
    }else{
       s+=a[n]
       sum(n+1) 
       return s 
        
    }
}

console.log(sum(n));
