// Create an object:
var person = {
    firstName  : "Jane",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
       return this;
    },
    fullName : function() {
        return "Her name is " + this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.myFunction();
document.getElementById("demo1").innerHTML = person.fullName();

// Explicit Function Binding using call()
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName:"John",
    lastName: "Doe",
}
var x = person1.fullName.call(person2); 
document.getElementById("demo2").innerHTML = x; 