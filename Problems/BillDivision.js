/**
 * Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2,4,6] . Anna declines to eat item k = bill[2] which costs 6 . If Brian calculates the bill correctly, Anna will pay (2+4)/2 = 3. If he includes the cost of bill[2], he will calculate (2+4+6)/2 = 6. In the second case, he should refund 3 to Anna.
 * 
 * 
 * 
 * Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

   bonAppetit has the following parameter(s):

   bill: an array of integers representing the cost of each item ordered
   k: an integer representing the zero-based index of the item Anna doesn't eat
   b: the amount of money that Anna contributed to the bill
 */

function bonAppetit(bill, k, b) {
    // Write your code here
    let count = 0 ;
    for(let i = 0 ; i < bill.length ; i++){
        if(i != k){
            count += bill[i];
        }
    }   
    if(count/2 == b){
        console.log("Bon Appetit");
    }
    else {
        console.log(b - count/2);
    }
}

// way 2
function bonAppetit2(bill, k, b) {
    // Write your code here
    bill.splice(k, 1);
    const a = bill.reduce((acc, curr) => acc + curr);
    b === (a / 2) ? console.log("Bon Appetit") : console.log(b - (a / 2));
}
let arr = [3,10,2,9];
bonAppetit2(arr, 1, 12);
