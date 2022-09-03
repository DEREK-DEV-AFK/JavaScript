/**
 * With JavaScript array variables, we can store several pieces 
 * of data in one place.
 * 
 * You start an array declaration with an opening square bracket, 
 * end it with a closing square bracket, and put a comma between 
 * each entry, like this:
 * 
 * Store Multiple Values in one Variable using JavaScript Arrays
 * 
 */
const sandwich = ["peanut butter", "jelly", "bread"];

/**
 * Nest one Array within Another Array
 * this is also caleed a multi-dimensinal array
 */
const teams = [["Buuls", 23], ["White Sox"]];


/**
 * Access Array Data with Indexes
 */
const array = [50, 60, 70];
const data = array[1]; // output: 60

/**
 * Modify Array Data with Indexes
 */
array[2] = 80; // updated array will be [50, 60, 80]

/**
 * Access Multi-Dimensional Arrays With Indexes
 */
const arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12],13,14]
];

const subArray = arr[3]; // output: 10,11,12,13,14
const nestedSubArray = arr[3][0]; // output: 10,11,12
const element = arr[3][0][1]; // output: 10

/**
 * Manipulate Arrays With push()
 * 
 * An easy way to append data to the end of an array is via the 
 * push() function.
 * 
 * .push() takes one or more parameters and "pushes" them onto the 
 * end of the array.
 * 
 */
const arr1 = [1,2,3];
arr1.push(4); // Updated arr will be : [1,2,3,4]
const arr2 = ["A","X","Z"];
arr2.push(["B", 1]); // update arr2 will be: ["A","X","Z",["B",1]]

/**
 * MAnipulate Arrays With pop()
 * 
 * Another way to change the data in an array is with the .pop() function.
 * 
 * .pop() is used to pop a value off of the end of an array. We can store this 
 * popped off value by assigning it to a variable. In other words, .pop() removes 
 * the last element from an array and returns that element.
 */
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); // updated array will be [1, 4]

/**
 * Manipulate Arrays With shift()
 * 
 * pop() always removes the last element of an array. What if you want to remove the first?
 * 
 * That's where .shift() comes in. It works just like .pop(), except it removes the first element 
 * instead of the last.
 * 
 */
const ourArray = ["Stimpson", "j", ["cat"]];
ourArray.shift(); // oupdated array will be ["j", ["cat"]]

/**
 * Not only can you shift elements off of the beginning of an array, you can also unshift elements 
 * to the beginning of an array i.e. add elements in front of the array.
 * 
 * .unshift() works exactly like .push(), but instead of adding the element at the end of the array, 
 * unshift() adds the element at the beginning of the array.
 */

ourArray.unshift("happy"); // updated array will be ["happy", "j",["cat"]]