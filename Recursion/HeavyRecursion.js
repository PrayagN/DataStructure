function recursion(n){
    if(n<=1){
        return 1
    }
    recursion(n-1)
    console.log(n);
    recursion(n-1)
}
console.log(recursion(5));