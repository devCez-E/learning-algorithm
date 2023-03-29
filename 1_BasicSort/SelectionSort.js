function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let minVal = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minVal]) minVal = j;
        }
        if(minVal != i) [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
        console.log(arr);
    }
}


selectionSort([19, 44, 38, 5, 47, 15]);