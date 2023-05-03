let a=[1,2,3,4,5];
let s=0;
let n=a.length-1;
indirectRecursive=(n)=>{
    if(n<0){
        return 1;
    }else{
        s+=a[n]
        secondfn(n-1)
        return s 
    }

}
secondfn =(n)=>{
    if(n<0){
        return 1;
    }else{
        s+=a[n]
         indirectRecursive(n-1)
        return s
    }
}

console.log(indirectRecursive(n));