function mergeSort(arr, lb, ub) {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    mergeSort(arr, lb, mid);
    mergeSort(arr, mid + 1, ub);
    merge(arr, lb, mid, ub);
  }
}
let sort = [];
function merge(arr, lb, mid, ub) {
  let i = lb;
  let j = mid + 1;
  let k = lb;
  while (i <= mid && j <= ub) {
    if (arr[i] <= arr[j]) {
      sort[k++] = arr[i++];
    } else {
      sort[k++] = arr[j++];
    }
  }
  if (i > mid) {
    while (j <= ub) {
      sort[k++] = arr[j++];
    }
  } else {
    while (i <= mid) {
      sort[k++] = arr[i++];
    }
  }
  for (k = lb; k <= ub; k++) {
    arr[k] = sort[k];
  }
}
const arr = [3, 0, -2, 4, -6];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
