function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}
const arr = [3,2,6,0,-2,-6]
console.log(bubbleSort(arr));

// O(n^2)T O(1)s