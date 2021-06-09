x = 3.14;        // This will not cause an error.
// myFunction();

function myFunction() {
    "use strict";
    y = 3.14;    // This will cause an error (y is not defined).
    var z;
    z = 10;

    document.getElementById("demo1").innerHTML = y;
    document.getElementById("demo2").innerHTML = z;
}
document.getElementById("demo").innerHTML = x;
