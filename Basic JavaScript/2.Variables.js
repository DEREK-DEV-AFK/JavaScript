/**
 * JavaScript provides 8 different dataa types which are 
 *  1) undefined
 *  2) null
 *  3) boolean
 *  4) string 
 *  5) symbol
 *  6) bigint
 *  7) number
 *  8) object
 * 
 * Variables allow computers to store and manipulate data in a 
 * dynamic fasion.They do this by using a "label" to point to the
 * data rather than using the data itself.
 */

// We tell JavaScript to create or declare a variable by putting
// the keyword `var` in front of it.
var ourName;


/**
 * In JavaScript, you can store a value in a variable with the 
 * assigment operator `=`.
 */
var myVariable = 5;
var MyStringVar = "your name";

/**
 * We can assign value of variable to other variable by assigment
 * operator
 */
var myVar = 5;
var myNum = myVar; // value: 5

/**
 * It is common to initialize a variable to an initial value in the
 * same line as it is declared.
 */
var ourVar = 0;

/**
 * when JavaScript variables are declared, they have an initial value of
 * `undefined`. if you do a math operation on an `undefined` var your result
 * will be `NaN` which means Not a Number.If you concatenate a string with an
 * `undefined` var, you will get a string of undefined
 */

var myUndefinedVar;

/**
 * In JavaScript all variables and function names are case sensitive. This means 
 * that capitalization matters.
 * 
 * MYVAR is not the same as MyVar nor myvar. It is possible to have multiple 
 * distinct variables with the same name but different casing. It is strongly 
 * recommended that for the sake of clarity, you do not use this language feature.
 * 
 * Best Practise :
 * Write variable names in JavaScript in camelCase. In camelCase, multi-word variable
 * names have the first word in lowercase and the first letter of each subsequent word
 * is capitalized.
 */

var someVariables;
var anotherVariableName;
var thisVariableNameIsLong;

/**
 * One of the biggest problems with declaring variables with the var keyword is that you 
 * can easily overwrite variable declarations:
 */
var camper = "james"; // value = james
var camper = "davide"; // now value = davide
/** 
 * In the code above, the camper variable is originally declared as James, and is then 
 * overridden to be David.
 * 
 * In a small application, you might not run into this type of problem. But as your 
 * codebase becomes larger, you might accidentally overwrite a variable that you did 
 * not intend to. Because this behavior does not throw an error, searching for and fixing 
 * bugs becomes more difficult.
 * 
 * A keyword called `let` was introduced in ES6, a major update to JavaScript, to solve this 
 * potential issue with the var keyword.
 * 
 * If you replace var with let in the code above, it results in an error:
 * 
 * let camp = "james";
 * let camp = "davide";
 * 
 * So unlike var, when you use let, a variable with the same name can only be declared once.
 */
let camp = "james" // cannot override this by redeclaring it.

/**
 * const has all the awesome features that let has, with the added bonus that variables 
 * declared using const are read-only. They are a constant value, which means that once a 
 * variable is assigned with const, it cannot be reassigned:
 */

const FAV_PET = "cat"; // we cannot update or reintialze it, now it is read only
/**
 * It is common for developers to use uppercase variable identifiers for immutable values 
 * and lowercase or camelCase for mutable values (objects and arrays). 
 */
