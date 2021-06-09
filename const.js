try {
    const PI = 3.141592653589793;
    PI = 3.14;
}
catch (err) {
    document.getElementById("demo").innerHTML = err;
}

//Changing the properties of a constant object
// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};

// Change a property:
car.color = "red";

// Add a property:
car.owner = "Johnson";

// Display the property:
document.getElementById("demo1").innerHTML = "Car owner is " + car.owner; 

// Create an Array:
const cars = ["Saab", "Volvo", "BMW"];

// Change an element:
cars[0] = "Toyota";

// Add an element:
cars.push("Audi");

// Display the Array:
document.getElementById("demo2").innerHTML = cars; 