var text = ""
var i = 0;

do {
    text += "<br>The number is " + i;
    i++;
}
while (i < 10);  

document.getElementById("demo").innerHTML = text;


var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i = 0;
var text1= "";
while (cars[i]) {
    text1 += cars[i] + "<br>";
    i++;
}
document.getElementById("demo1").innerHTML = text1;