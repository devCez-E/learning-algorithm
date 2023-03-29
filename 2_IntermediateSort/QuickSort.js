let tempArr = [100, -3, 5,2,1,8,4,7,6,3];

function Pivot(arr, pivotIdx = 0, end = arr.length - 1){
    function swap(arr, idx1, idx2){
        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    let pivot = arr[pivotIdx];
    let swapIdx = pivotIdx;

    for(let i = pivotIdx+1; i < arr.length; i++){
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, pivotIdx, swapIdx);
    return swapIdx;
}

function QuickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
        let pivotIdx = Pivot(arr, left, right);
        QuickSort(arr, left, pivotIdx-1);
        QuickSort(arr, pivotIdx+1, right);
    }
    return arr;
}

console.log(QuickSort(tempArr));