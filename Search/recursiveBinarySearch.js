let a=[1,2,3,4,5,6,7]
function recursiveBinary(target){
    return search(target,0,a.length-1)
}
function search(target,leftIndex,rightIndex){
if(leftIndex>rightIndex){
    return -1;
}
let middleIndex = Math.floor((leftIndex+rightIndex)/2);
if(target==a[middleIndex]){
    return middleIndex
}
if(target<a[middleIndex]){
    return search(target,leftIndex,rightIndex-1)
}else{
    return search(target,leftIndex+1,rightIndex)
}
}
console.log(recursiveBinary(5));
