/**
 * Given a positive integer num, return the sum of all odd Fibonacci numbers 
 * that are less than or equal to num.
 * 
 * The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
 * number in the sequence is the sum of the two previous numbers. The first six 
 * numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * 
 * For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less
 * than or equal to 10 are 1, 1, 3, and 5.
 * 
 */

const { CustomError } = require("hardhat/internal/hardhat-network/stack-traces/model");

function sumFibs(num) {
    var prev = 0, curr = 1, result = 0;
    while(curr <= num){
        if(curr % 2 != 0){
            result +=curr;
        }
        curr += prev;
        prev = curr - prev; 
    }
    console.log(result);
    return result;
}

sumFibs(4);