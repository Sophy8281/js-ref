function changeText(id) {
    id.innerHTML = "Ooops!";
}

//HTML Event Attributes
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}

// Assign Events Using the HTML DOM
document.getElementById("myBtn").onclick = displayDate1;

function displayDate1() {
    document.getElementById("demo1").innerHTML = Date();
}

//onchange
function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

// onmouseover and onmouseout 
function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}

// onmousedown, onmouseup and onclick Events
function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
}

function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}