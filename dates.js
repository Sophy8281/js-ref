var d = new Date();
document.getElementById("demo1").innerHTML = d;
document.getElementById("demo2").innerHTML = d.toDateString();
document.getElementById("demo3").innerHTML = d.getTime();
document.getElementById("demo4").innerHTML = d.getFullYear();
document.getElementById("demo5").innerHTML = d.getMonth();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("demo6").innerHTML = months[d.getMonth()];
document.getElementById("demo7").innerHTML = d.getDate();
document.getElementById("demo8").innerHTML = d.getDay();
document.getElementById("demo9").innerHTML = d.getHours();
document.getElementById("demo10").innerHTML = d.getMinutes();
document.getElementById("demo11").innerHTML = d.getSeconds();
document.getElementById("demo12").innerHTML = d.getMilliseconds();