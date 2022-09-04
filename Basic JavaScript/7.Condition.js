/**
 * Use Conditional Logic with If Statements
 * 
 * if statements are used to make decisions in code. The keyword if tells JavaScript to 
 * execute the code in the curly braces under certain conditions, defined in the parentheses. 
 * These conditions are known as Boolean conditions and they may only be true or false.
 * 
 * When the condition evaluates to true, the program executes the statement inside the curly braces. 
 * When the Boolean condition evaluates to false, the statement inside the curly braces will not execute.
 */
function test(myCondition) {
    if(myCondition) {
        return "it was ture";
    }
    return "it was false";
}

test(true); // will return: It was true
test(false); // will return: It was false

/**
 * Comparison with the Equality Operator
 * 
 * There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.
 * 
 * The most basic operator is the equality operator ==. The equality operator compares two values and returns true if 
 * they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the 
 * value on the right of the operator to a variable on the left.
 */
function equalityTest(val){
    if(val == 10){
        return "Equal";
    }
    return "Not Equal";
}

equalityTest(10); // will return: Equal
equalityTest(2); // will return: Not Equal

/**
 * Comparison with the Strict Equality Operator
 * 
 * Strict equality `===` is the counterpart to the equality operator `==`. However, unlike the equality operator, which
 * attemps to convert both values being comapred to a common type, the strict equality operator does not perform a type
 * conversion.
 * 
 * If the values being compared have diffrent types, they are considered unequal, and the strict equality operator will 
 * return false
 */
function strictCompare(num) {
    if(3 === num){
        return true; // 3 === 3 will return True
    }
    return false; // 3 === '3' will return False
}

/**
 * Comparison with the Inequality Operator
 * 
 * The inequality operator `!=` is the opposite of the equality operator. It means not equal and returns False where equality
 * would return True and vice versa. Like the equality operator, the inequality operator will convert data types of values 
 * while comparing.
 */
function inequalityOperator(num){
    if(1 != num){ // 1 != 2 return true 
        return true;
    }
    return false; // 1 != '1' return false 
}

/**
 * Comparison with the Strict Inequality Operator
 * 
 * The strict inequality operator `!==` is logical opposite of the strict equality operator. It means "Strictly Not Equal" and 
 * returns False where strict equality would return True and vice versa. The strict inequality operator will not convert data types. 
 */
if(3 !== 3){} // false
if(3 !== '3'){} // true
if(3 !== 4){} // true

/**
 * Comparison with the Greater Than Operator
 * 
 * The grater than operator `>` compares the values of two numbers. if the number to the left is greater than the number to the right,
 * it returns true. Otherwise, it returns false.
 * 
 * Like the equality operator, the greater than operator will convert data types of values while comapring.
 */
if(5 > 3){} // true
if(5 > '3'){} // true
if(2 > 3){} // false
if('2' > 3){} // false

/**
 * Comparison with the Greator Than or Equal To Operator
 * 
 * The greater than or equal to operator `>=` compares the values of two numbers. If the number to the left is greater than or equal to 
 * the number to the right, it returns true. Otherwise, it returns false.
 * 
 * Like the equality operator, the greater than or equal to operator will convert data types while comapring.
 */
if(6 >= 6){} // true
if(6 >= '3'){} // true
if(4 >= 6){} // false
if('4' >= 6){} // false

/**
 * Comparison with the Less Than Operator
 * 
 * The less than operator `<` compares the values of two numbers. If the number to the left is less than the number to the right, it 
 * returns true. OTherwise, it returns false. Like the equality operator, the less than operator converts data types while comparing.
 */
if(2 < 5){} // true
if('3' < 5){} // true
if(7 < 5){} // false
if('7' < 5){} // false

/**
 * Comparison with the Less Than Or Equal To Operator
 * 
 * The less than or equal to operator `<=` compares the values of two numbers. If the number to the left is less than or equal to the
 * number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the 
 * equality operator, the less than or equal to operator converts data types.
 */
if(4 <= 5){} // true
if('4' <= 5){} // true
if(5 <= 5){} // true
if(7 <= 5){} // false
if('7' <= 5){} // false

/**
 * Comparisons with the Logical And Operator
 * 
 * Sometimes you will need to test more than one thing at a time. The logical and operator `&&` returns true if and only if the operands 
 * to the left and right of it are true
 * 
 * The same effect could be achieved by nesting an if statement inside another if.
 */
function andOperator(){
    if(6 > 5 && 6 < 10 ){
        return "Yes";
     }
     return "No";    
}
 
 /**
  * Comparisons with the Logical Or Operator
  * 
  * The logical or operator `||` returns true if either of the operands is true. Otherwise, it returns false.
  * 
  * The logical or operator is composed of two pipe symbols `||`. This can typically be found between your Backspace and EnterKeys.
  * 
  * The pattern below should look familiar form prior waypoints
  */
 function orOperator(){
    if(5 > 10 || 5 < 1){
        return "No";
    }
    return "Yes";
 }

 /**
  * Else Statements
  * 
  * When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? 
  * Normally nothing would happen.With an else statement, an alternate block of code can be executed.
  */
 function ifElse(num) {
    if(num > 10) {
        return "Bigger than 10";
    } else {
        return "10 or less";
    }
 }

 /**
  * Else If Statements
  * 
  * If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.
  */
 function elseIf(num) {
    if(num > 15){
        return "Bigger than 15";
    } else if (num < 5){
         return "smaller than 5";
    } else {
        return "Between 5 and 15";
    }
 }

 /**
  * Switch Statements
  * 
  * If you have many options to choose from, use a switch statements. A switch statement tests a value and can have many case 
  * statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.
  * 
  * you may not be able to specify all possible values as case statements.Instead you can add the default statement which will be executed 
  * if no matching case statements are found. Think of it like the final else statement in an if/else chain. 
  * 
  * if the break statement is omitted from a switch statement's case, the following case statements are executed until a break is encountered.
  * If you have multiple inputs with the same output, you can represent them in a switch.
  */
 
 switch (lowercaseLEtter) {
    case "a":
        console.log("A");
        break;
    case "b":
        console.log("B");
        break;   
    case "c":    
    case "d":    
    case "e":
        console.log("c,d,e");
        break;    
    default:
        console.log("Default vlaue");
        break;     
 }