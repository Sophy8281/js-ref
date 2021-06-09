// checkValidity() and validationMessage
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "The input is OK";
    } 
} 

// rangeOverflow
function myFunction1(){
    var txt = "";
    if (document.getElementById("id2").validity.rangeOverflow) {
        txt = "Value too large";
        // document.getElementById("demo1").innerHTML = txt;
    } else {
        txt = "Input OK";
        // document.getElementById("demo1").innerHTML = txt;
    } 
    document.getElementById("demo1").innerHTML = txt;
    
}

// rangeUnderflow
function myFunction2() {
    var txt = "";
    if (document.getElementById("id3").validity.rangeUnderflow) {
        txt = "Value too small";
    } else {
        txt = "Input OK";
    } 
    document.getElementById("demo2").innerHTML = txt;
}