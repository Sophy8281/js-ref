var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe",
}

var person2 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName;
    }
}
var x = person2.fullName.call(person1); 
document.getElementById("demo").innerHTML = x; 

// The apply() method accepts arguments in an array
var y = person.fullName.call(person1, "Oslo", "Norway"); 
document.getElementById("demo1").innerHTML = y; 