function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped =true
            }
        }
    }while(swapped)
    return arr
}
const arr= [1,45,-3,-6,0,4523]
console.log(bubbleSort(arr));