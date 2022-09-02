/*
 * Question:
 * Find the missing letter in the passed letter range and return it.
 *
 * If all letters are present in the range, return undefined.
 * 
 * a - 97
 * b - 98
 * c - 99
 * d - 100
 * e - 101
 * f - 102
 * g - 103
 * h - 104
 * i - 105
 * j - 106
 * k - 107
 * l - 108
 * m - 109
 * n - 110
 * o - 111
 * p - 112
 * q - 113
 * r - 114
 * s - 115
 * t - 116
 * u - 117
 * v - 118
 * w - 119
 * x - 120
 * y - 121
 * z - 122
 * 
 */
// solved way 1
function fearNotLetter(str) {
    for(let a=0 ; a<str.length ; a++){
        if(str.charCodeAt(a+1) - str.charCodeAt(a) > 1){
            console.log(`letter is : ${String.fromCharCode(str.charCodeAt(a)+1)}`);
            return String.fromCharCode(str.charCodeAt(a)+1);
        }
    }
}
  
fearNotLetter("abce");

