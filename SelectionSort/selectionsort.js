function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let smallest =i
        for(let j=i+1 ;j<arr.length;j++){
            if(arr[smallest]>arr[j]){
                smallest =j
            }
        }
        let temp =arr[i]
        arr[i] = arr[smallest]
        arr[smallest]= temp
    }
    return arr
}
const arr =[32,1,2,0,-6,-23]
console.log(selectionSort(arr));

// O(n^2)T O(1)S