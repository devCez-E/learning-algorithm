function getDigit(num, place){
    num *= 0.1 ** place;
    return parseInt(num % 10);
    // return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigit(arr){
    let mostDigit = 0;
    for(let i = 0; i<arr.length; i++){
        if(digitCount(arr[i]) > mostDigit) mostDigit = digitCount(arr[i]);
        //mostDigit = Math.max(mostDigit, digitCount(arr[i]));
    }
    return mostDigit;
}

function RadixSort(arr){
    let maxDigit = mostDigit(arr);

    for(let d = 0; d < maxDigit; d++){
        let digitBuckets = Array.from({length : 10}, () => [])
        for(let i = 0; i < arr.length; i++){
            digitBuckets[getDigit(arr[i], d)].push(arr[i]);
        }
        arr = digitBuckets.flat();
    }

    return arr;
}


RadixSort([23, 345, 5467, 12, 2345, 9852]);