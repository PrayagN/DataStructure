function recursiveFunction(n){
    if(n==1){
        return 1;
    }else{
        return n*recursiveFunction(n-1)
    }
}
console.log(recursiveFunction(5));