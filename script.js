//toString() 
var x = 123;
document.getElementById("demo1").innerHTML =
x.toString() + "<br>" +
(123).toString() + "<br>" +
(100 + 23).toString();

//toFixed()
var x = 9.656;
document.getElementById("demo2").innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);

//toPrecision
var x = 9.656;
document.getElementById("demo3").innerHTML = 
    x.toPrecision() + "<br>" +
    x.toPrecision(2) + "<br>" +
    x.toPrecision(4) + "<br>" +
    x.toPrecision(6); 
    
//valueOf() 
var x = 123;
document.getElementById("demo4").innerHTML = 
    x.valueOf() + "<br>" +
    (123).valueOf() + "<br>" +
    (100 + 23).valueOf();
    
    