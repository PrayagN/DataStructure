function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert = arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j--;
        }
        arr[j+1]=numberToInsert
    }
    return arr
}
const arr =[95,32,-543,0,23,1]
console.log(insertionSort(arr));

// O(n^2)T O(1)S