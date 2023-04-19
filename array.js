var strings = ['Coding', 'is', 'so', 'cool'];
var numbers = [1, 3, 5, 7];
var booleans = [true, false, true, true];

/*
The below array method will 'pop', or remove, the last element 
of the strings array, modifying the original string array. 
If you were to log the strings array to the console after running
strings.pop(), it would print ['Coding', 'is', 'so'].
*/
strings.pop();
/* 
The below array method will 'shift', or remove, the first element
of the numbers array, modifying the original numbers array.
If you were to log the numbers array to the console after running
numbers.shift(), it would print [3, 5, 7].
*/
numbers.shift();
/* 
The below array method will 'unshift', or add, the value passed into
the method to the beginning of the booleans array. In other words, 
unshift() will add what is located inside of the parentheses to the
beginning of the booleans array, shifting all elements down one place
and modifying the original array. If you were to log the booleans array
to the console after running booleans.unshift(false), it would print 
[false, true, false, true, true].
*/
booleans.unshift(false);

// Understanding of index positions

// Index positions in javascript start at 0.
console.log(strings[0]); // "Coding"
//The last element in an array can be referenced by -1
console.log(numbers.at(-1)); // 7
/* 
To start counting from 0 is slightly more efficient than counting
from 1. This is made more evident when evaluating a function or methods
time complexity, or the steps the computer has to take to run each 
function or method.
*/