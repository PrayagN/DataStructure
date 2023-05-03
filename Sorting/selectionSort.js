// function selectionSort(a){
//     for(let i=0;i<a.length;i++){
//         let smallest =i 
//         for(let j=i+1;j<a.length;j++){
//             if(a[smallest]>a[j]){
//                 smallest =j
//             }
//         }
//         let temp =a[i]
//         a[i] =a[smallest]
//         a[smallest]=temp


//     }
// }
// const a =[-2,0,12,-5,99]
// selectionSort(a)
// console.log(a);

function selectionSort(a){
    for(let i=0;i<a.length-1;i++){
        let smallest =i
        for(let j=i+1;j<a.length;j++){
            if(a[smallest]>a[j]){
                smallest =j
            }
        }
        let temp = a[i]
        a[i] =a[smallest]
        a[smallest] = temp
    }
}
const a=[-2,0,5,1]
selectionSort(a)
console.log(a);