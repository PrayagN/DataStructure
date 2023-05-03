// Linear Search

let a=[1,3,4,5,2,6]
function index(n){
    for(let i=0;i<a.length;i++){
        if(a[i]==n){
            return i
        }
    }return -1;
}
console.log(index(2));