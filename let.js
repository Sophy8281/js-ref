"use strict";//a variable cannot be used if it is not declared

var  x = 10;
// Here x is 10
{  
    let x = 2;
    // Here x is 2
    document.getElementById("demo").innerHTML = x;
}
// Here x is 10
document.getElementById("demo1").innerHTML = x;