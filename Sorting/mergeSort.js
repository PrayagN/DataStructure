// function mergeSort(a) {
//   if (a.length < 2) {
//     return a;
//   }
//   let mid = Math.floor(a.length / 2);
//   let leftArray = a.slice(0, mid);
//   let rightArray = a.slice(mid);
//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// }
// function merge(leftArray, rightArray) {
//   let sortArray = [];
//   while (leftArray.length && rightArray.length) {
//     if (leftArray[0] <= rightArray[0]) {
//       sortArray.push(leftArray.shift());
//     } else {
//       sortArray.push(rightArray.shift());
//     }
//   }
//   return [...sortArray, ...leftArray, ...rightArray];
// }

// const a = [-2, -1, 0, 5, 2, 1, 6];
// console.log(mergeSort(a));


function mergeSort(arr){
  if(arr.length<2){
    return arr
  }
  let mid = Math.floor(arr.length/2);
  let leftArray =arr.slice(0,mid)
  let rightArray = arr.slice(mid)
  return merge(mergeSort(leftArray),mergeSort(rightArray))
}
function merge(leftArray,rightArray){
  let sortArray= [];
  while(leftArray.length && rightArray.length){
    if(leftArray[0]<=rightArray[0]){
        sortArray.push(leftArray.shift())
    }else{
      sortArray.push(rightArray.shift())
    }
  }
  return [...sortArray,...leftArray,...rightArray]
}
const arr =[1,5,-2,-19,32]
console.log(mergeSort(arr));