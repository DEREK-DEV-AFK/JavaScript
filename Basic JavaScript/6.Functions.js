/**
 * Write Reusable JavaScript with Functions
 * 
 * In JavaScript, we can divide up our code into reusable parts called functions.
 * 
 */
 function functionName() {
    console.log("Hello World");
} // prints out "Hello World"


/**
 * Passing Values to Functions with Arguments
 * 
 * Parameters are variables that act as placeholders for the values that are to be 
 * input to a function when it is called. When a function is defined, it is typically 
 * defined along with one or more parameters. The actual values that are input 
 * (or "passed") into a function when it is called are known as arguments.
 * 
 */

function testFun(param1, param2) {
    console.log(param1, param2);
} // prints outs param1 and param2

/**
 * Return a Value from a Function with Return
 * 
 * We can pass values into a function with arguments. You can use a return statement to 
 * send a value back out of a function.
 * 
 */
function plusThree(num) {
    return num + 3;
}
const answer = plusThree(1); // ouput: 4

/**
 * Global Scope and Functions
 * 
 * In JavaScript, scope refers to the visibility of variables. Variables which are defined 
 * outside of a function block have Global scope. This means, they can be seen everywhere 
 * in your JavaScript code.
 * 
 * Variables which are declared without the let or const keywords are automatically created 
 * in the global scope. This can create unintended consequences elsewhere in your code or 
 * when running a function again. You should always declare your variables with let or const.
 */
let var1 = 1; //global scope, can be access any where.
function getVar() {
    let var2 = 4; // Local Scope, only can be access within function.
}

/**
 * Local Scope and Functions
 * 
 * Variables which are declared within a function, as well as the function parameters, have 
 * local scope. That means they are only visible within that function.
 */
function myTest() {
    const loc = "foo"; // local scope, cannot access outside the function
}

/**
 * Global vs. Local Scope in Functions
 * 
 * It is possible to have both local and global variables with the same name. When you do this, 
 * the local variable takes precedence over the global variable.
 */

const someVar = "Hat";

function myFun() {
    const someVar = "Head";
    return someVar; // it  will return: Head
}

/**
 * Understanding Undefined Value returned from a Function
 * 
 * A function can include the return statement but it does not have to. In the case that the function 
 * doesn't have a return statement, when you call it, the function processes the inner code but the 
 * returned value is undefined.
 */
let sume = 0;
function addSum(num) {
    sum = sum + num;
}

addSum(3); // this return `undefined` but will change the sum variable