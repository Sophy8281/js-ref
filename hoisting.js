"use strict";
//In hoisting variables can be 'declared' after it has been used
//**hoisting doesn't work on variable initializations like- var x = 5 */
var x;
x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element 
elem.innerHTML = x;                     // Display x in the element

// var x; // Declare x