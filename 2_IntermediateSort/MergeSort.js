function merge(arr1, arr2){
    resultArr = [];
    Idxi = 0;
    Idxj = 0;

    while(Idxi < arr1.length && Idxj < arr2.length){
        if(arr1[Idxi] < arr2[Idxj]) {
            resultArr.push(arr1[Idxi]);
            Idxi++;
        }
        if(arr1[Idxi] > arr2[Idxj]) {
            resultArr.push(arr2[Idxj]);
            Idxj++;
        }
    }

    if(Idxj == arr2.length){
        for(let i = Idxi; i< arr1.length; i++) resultArr.push(arr1[i]);
    }

    if(Idxi == arr1.length){
        for(let j = Idxj; j < arr2.length; j++) resultArr.push(arr2[j]);
    }

    return resultArr;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let idx = Math.floor(arr.length / 2);
    let arr1 = mergeSort(arr.slice(0, idx));
    let arr2 = mergeSort(arr.slice(idx));
    return merge(arr1, arr2);
}

console.log(mergeSort([10,24,76,73,72,1,9]));