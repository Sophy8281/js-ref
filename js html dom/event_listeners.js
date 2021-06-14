document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

//alert
document.getElementById("myBtn1").addEventListener("click", function(){
    alert("Hello World!");
});

document.getElementById("myBtn2").addEventListener("click",myFunction)

function myFunction(){
    alert("Hello World!");
}

// Add Many Event Handlers to the Same Element - 2 clicks
var x = document.getElementById("myBtn3");
x.addEventListener("click", myFunction);
x.addEventListener("click", someOtherFunction);

function myFunction() {
    alert ("Hello World!");
}

function someOtherFunction() {
    alert ("This function was also executed!");
}

// Add Many Event Handlers to the Same Element - diff events
var x = document.getElementById("myBtn4");
x.addEventListener("mouseover", myFirstFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFirstFunction() {
    document.getElementById("demo1").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo1").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo1").innerHTML += "Moused out!<br>";
}

// Add an Event Handler to the Window Object
window.addEventListener("resize", function(){
    document.getElementById("demo2").innerHTML = Math.random();
});

// Passing Parameters
var p1 = 5;
var p2 = 7;

document.getElementById("myBtn5").addEventListener("click", function() {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    var result = a * b;
    document.getElementById("demo3").innerHTML = result;
}

// Event Bubbling or Event Capturing
document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
}, false);

document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
}, true);

// The removeEventListener() method
document.getElementById("myDIV").addEventListener("mousemove", myFunction5);

function myFunction5() {
    document.getElementById("demo4").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("myDIV").removeEventListener("mousemove", myFunction5);
}