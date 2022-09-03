/**
 * When you are defining a string you must start and end with a single
 * or double quote. What happens when you need a literal quote: " or ' 
 * inside of your string?
 * 
 * In JavaScript, you can escape a quote from considering it as an end of 
 * string quote by placing a backslash (\) in front of the quote.
 */
let smapleStr = "Alan said,\"Peter is learning JavaScript\".";
// Output : Alan said, "Peter is learning JavaScript".
let smapleStr2 = 'Let try "this"';
// Output: Let try "this", but this can couse error if you want to use both
// qoutes in am string.


/**
 * Quotes are not the only characters that can be escaped inside a string. 
 * There are two reasons to use escaping characters:
 * 
 *  1.To allow you to use characters you may not otherwise be able to type out, 
 *    such as a carriage return.
 *  2.To allow you to represent multiple quotes in a string without JavaScript 
 *    misinterpreting what you mean.
 * 
 *  CODE      OUTPUT
 *   \'       single quote
 *   \"       double qoute
 *   \\       backslash
 *   \n       newline
 *   \r       carriage return
 *   \t       tab
 *   \b       word boundary
 *   \f       form feed
 */

let stringsTry = "\'Single Qoute\'  \"Double QOute\" \\ backslash \n new line \r carriage return \t tab space \b word boundary \f formfeed";


/**
 * Concatenating String with Plus Operator;
 */
let ourStr ="hello" + "world";

/**
 * Constructing Strings with variables
 */
const myWord = "Derek";
const mySentence = "Hello, my name is " + myWord + " , Nice ot meet you";

/**
 * Appending Variables to Strings
 */
const anAdjective = "awesome!";
let ourString = "you are ";
ourString += anAdjective; // output: you are awesome!

/**
 * Length of String
 */
const myLengthStr = "helloguys";
myLengthStr.length; // output: 9

/**
 * Use Bracket Notation to Find the First Character in a String
 */
const firstName = "Derek";
const firstLetter = firstName[0]; // output: D

/**
 * Understanding String Immutability
 */
let myString = "Bob";
myString[0] = "J";
/**
 * cannot change the value of myString to Job, because the contents 
 * of myString cannot be altered. Note that this does not mean that 
 * myString cannot be changed, just that the individual characters 
 * of a string literal cannot be changed. The only way to change 
 * myString would be to assign it with a new string, like this:
 */
myString = "Job";


/**
 * Use Bracket Notation to FInd the Nth Character in a String
 */
const secondLetterIS = myString[1]; // output: o

/**
 * Use Bracket Notation to FInd the Last Character in a String
 */
const lastLetter = myString[myString.length - 1]; // output: b

/**
 * Use Bracket Notation to Find the Nth-to-Last Character in a String
 */
const secondToLastLetter = myString[myString.length - 2]; // output: o

/**
 * Word Blanks
 */
const word1 = "hot", word2 = "laughed", word3 = "silly";
const sentance = "It was really "+word1+ ", and we "+word2+" ourselves "+word3+".";
// output: It was really hot, and we laughed ourselves silly.