function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let leftArray =[]
    let rightArray=[]
    let pivot = arr[arr.length-1]
    for(let i=0;i<arr.length-1 ;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
    }
    return (quickSort(leftArray).concat(pivot,quickSort(rightArray)))
}
const arr=[2,3,2,14,-43,50,-35]
 console.log(quickSort(arr));
 // O(n log n)T average  O(log n)
 // O(n^2)T worst O(n)S