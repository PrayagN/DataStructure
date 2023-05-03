// function quickSort(a){
//     if(a.length<2){
//         return a
//     }
//     let left =[]
//     let right =[]
//     let pivote = a[a.length-1]
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]>pivote){
//             right.push(a[i])
//         }else{
//             left.push(a[i])
//         }
//     }
//     return [...quickSort(left),pivote,...quickSort(right)]
// }
// const a=[-2,0,49,0,-5,91]
// console.log(quickSort(a));
/*
The time complexity of quicksort is O(n log n) in the best case and average case, where n is the number of elements to be sorted.

This is because in each recursive step, the input array is partitioned into two sub-arrays of roughly equal size. This partitioning step takes O(n) time, and it is performed recursively until the sub-arrays have length 1 or 0.

In the best case and average case, the pivot element is chosen such that it divides the array into two roughly equal sub-arrays. In this case, the recursion tree has a height of log n, because each recursive call reduces the size of the input array by roughly half. The total time complexity is therefore O(n log n), since the partitioning step is performed O(log n) times, and each partitioning step takes O(n) time.

In the worst case, however, the pivot element is chosen such that it divides the array into two sub-arrays of drastically different sizes, and the recursion tree is unbalanced. In this case, the recursion tree has a height of n, since each recursive call only reduces the size of the input array by 1. The total time complexity is therefore O(n^2), since the partitioning step is performed O(n) times, and each partitioning step takes O(n) time.
*/

function quickSort(arr) {
    if(arr.length<2){
        return arr
    }
  let pivot = arr[arr.length - 1];
  let leftArray = [];
  let rightArray = [];
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot){
        leftArray.push(arr[i])
    }else{
        rightArray.push(arr[i])
    }
  }
  return [...quickSort(leftArray),pivot,...quickSort(rightArray)]

}
const arr = [1, 12, 3, -2, -12];
console.log(quickSort(arr));
