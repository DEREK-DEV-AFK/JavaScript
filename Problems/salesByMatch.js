/**
 * n = 7
 * ar = [1,2,1,2,1,3,2]
 * There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.
 */
 function sockMerchant(n, ar) {
    // Write your code here
     let count = 0;
     let subArr = ar;
    for(let i = 0 ; i < subArr.length ; i++){
        for(let j = i+1; j < subArr.length ; j++){
            if(ar[i] == ar[j]){
                count++;
                //subArr.splice(i,1);
                subArr.splice(j,1);
                break;
            }
        }
    }
    console.log(count);
    return count;
}

function sockMerchant2(n, ar) {
    
    ar.sort();
    let count = 0 ;
    let cur = ar[0];
    for(let i = 1; i< n; i++){
        if(cur == ar[i]){
            i++;
            count++;
            cur=ar[i];
        }else cur = ar[i];
    }
    return count;

}
