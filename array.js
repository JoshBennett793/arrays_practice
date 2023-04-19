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
