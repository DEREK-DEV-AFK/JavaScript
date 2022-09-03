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
 * 
 */