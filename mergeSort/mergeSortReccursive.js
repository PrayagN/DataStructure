function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid =Math.floor(arr.length/2)
    let leftArray =arr.slice(0,mid)
    let rightArray =arr.slice(mid)
    return  merge(mergeSort(leftArray),mergeSort(rightArray))
}
function merge(leftArray,rightArray){
    let sortArray=[]
    while(leftArray.length&& rightArray.length){
        if(leftArray[0]<rightArray[0]){
            sortArray.push(leftArray.shift())
        }else{
            sortArray.push(rightArray.shift())
        }
    }
    return [...sortArray,...leftArray,...rightArray]
}
const arr=[3,-2,1,90,0]
console.log(mergeSort(arr))