// function bubbleSort(arr){
//     let swapArray
//     do{
//         swapArray = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapArray = true
//             }
//         }
//     }
//     while(swapArray)

// }
// const arr=  [-9,2,0,-2,-5,-6]
// bubbleSort(arr)
// console.log(arr);

function bubbleSort(arr) {
    let swapped
    do{
        for (let i = 0; i < arr.length - 1; i++) {
           swapped =false
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped=true
            }
        }
    }while(swapped)
    return arr
}
const arr = [-2, 4, -2, 5, 0, 1];
console.log(bubbleSort(arr));
// here the Complexity - O(n^2)T, O(1)S