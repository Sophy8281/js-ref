//Invoking a Function as a Function
function myFunction(a, b) {
    return a * b;
}
document.getElementById("demo").innerHTML = myFunction(10, 2); 

document.getElementById("demo1").innerHTML = window.myFunction(10, 5); 

//Invoking a Function as a Method
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
document.getElementById("demo2").innerHTML = myObject.fullName(); 

//Invoking a Function with a Function Constructor
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}

var x = new myFunction("John","Doe")
document.getElementById("demo3").innerHTML = x.firstName; 