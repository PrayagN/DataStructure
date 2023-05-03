function indirectRecursiveFact(n){
    return recursive(n)
    function recursive(n){
        if(n<=1){
            return 1;
        }else{
            return n*recurs(n-1)
        }
    }
    function recurs(n){
        if(n<=1){
            return 1;
        }else{
            return n*recursive(n-1)
        }
    }
}

console.log(indirectRecursiveFact(5));