/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their 
 * corresponding HTML entities.
 */

function HTMLentities(str){
    let arr = str.split("");
    for(let i = 0 ; i< arr.length; i++){
        switch(arr[i]){
            case "&":
                arr[i]="&amp;";
                break;
            case ">":
                arr[i]="&gt;";
                break;
            case "<":
                arr[i]="&lt;";
                break;
            case "'":
                arr[i]="&apos;"
                break;  
            case '"':
                arr[i]="&quot;"
                break;          
        }
    }
    console.log(arr.join(""));
    return arr.join("");
}

HTMLentities("Dolce & Gabbana");