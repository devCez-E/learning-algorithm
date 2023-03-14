function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        let j;
        for(j = i - 1; j >= 0 && arr[j] > currentVal ; j--){
            if(arr[j] > currentVal) arr[j + 1] = arr[j];
            else break;
        }
        arr[j+1] = currentVal;
    }
    console.log(arr);
}

insertionSort([2,1,9,76,4]);