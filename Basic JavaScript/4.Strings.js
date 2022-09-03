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