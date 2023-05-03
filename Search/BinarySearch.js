function binarySearch(a,target){
    return search(a,target,0,a.length)
}
function search(a,target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return false
    }
    let middleIndex =Math.floor((leftIndex+rightIndex)/2)
    if(target == a[middleIndex]){
        return middleIndex
    }
    if(target<a[middleIndex]){
        return search(a,target,leftIndex,rightIndex-1)
    }else{
        return search (a,target,leftIndex+1,rightIndex)
    }
}
console.log(binarySearch([1,2,3,4,5,6],4));