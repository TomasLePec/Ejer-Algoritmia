function largestPermutation(k, arr) {
    for (var i = 0; i < k && i < arr.length-1; i++){
        let x = arr[i];
        let index = i;
        for (var j=i+1;j< arr.length;j++){
            if(x<arr[j]){
                x = arr[j];
                index = j;
            }
        }
        arr[index]=arr[i];
        arr[i]=x;
        }
    return arr;
}
