function migratoryBirds(arr) {
    // Write your code here
    arr.sort();
    let result = [1,1,1,1,1], count=1; 
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = i+1; j < arr.length ; j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        let no = arr[i] - 1;
        if(result[no] == 1){
            result[no] = count;
        }
        count = 1;
    }
    console.log(result);
    let resultValue = 0, indexofGreater = 0;
    for(let k = 0 ; k < result.length ; k++){
        if(result[k] > resultValue){
            resultValue = result[k];
            indexofGreater = k;
        }
    }
    return indexofGreater+1;
}
let arr = [1, 4, 4, 4, 5, 3];
migratoryBirds(arr);