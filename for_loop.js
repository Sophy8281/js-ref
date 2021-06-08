var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;

//for/in
var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.getElementById("demo1").innerHTML = txt;