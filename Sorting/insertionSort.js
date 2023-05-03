// function insertionSort(a){
//     for(let i=1;i<a.length;i++){
//         let numberToInsert =a[i]
//         let j=i-1
//         while(j>=0 && a[j]>numberToInsert){
//             a[j+1]=a[j]
//             j--
//         }
//         a[j+1]=numberToInsert
//     }
// }
// const a=[-4,2,1,-5,0]
// insertionSort(a)
// console.log(a);

function insertionSort(arr) {
  for(let i=1;i<arr.length;i++){
    let numberToInsert =arr[i]
    let j=i-1
    while(j>=0 && arr[j]>numberToInsert){
        arr[j+1]=arr[j]
        j--;
    }
    arr[j+1] = numberToInsert
  }
  return arr
}
const arr = [0, 2, -1, -5, 25];
console.log(insertionSort(arr));
