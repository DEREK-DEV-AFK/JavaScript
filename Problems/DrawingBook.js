/**
 * 
 */
 function pageCount(n, p) {
    // Write your code here
    /**
     * check p is gerater than half of n.
     * if true then we will reverse loop.
     *    then we will check p == n
     *    true then return count
     *    false then 
     *         we will check n is even 
     *         true then we will start from n -1
     *         false then we will start from n
     *         then return count
     * 
     * else false then we will loop
     * then return loop  
     */
    let count =  0;
    if (p > n / 2) {
        let start = n;
        if (n % 2 == 0) {
            start = n - 1
            
            if (n == p) {
                return count;
            }
            count++
        }
        for (let i = start; i >= 1; i -= 2) {
            if (i == p || i - 1 == p) {
                return count;
            }
            count++;
        }
    } else {
        if (n == p) {
            return count;
        }
        // else {
        //     count++;
            for (let i = 0; i <= p; i += 2) {
                if (i == p || i + 1 == p) {
                    return count;
                } else {
                    count++;
                }
            }
        //}
    }
}

function way2(n, p){
    if(n == 2){
        return 0;
    }
    if(n % 2 == 0 && n - p == 1){
        return 1;
    }
    
    return Math.min(parseInt(p/2), parseInt((n - p)/2));
}