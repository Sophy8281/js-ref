function myFunction() {
    var message, x;
    message = document.getElementById("p01");// find an element 
    message.innerHTML = "";//set error message to empty
    x = document.getElementById("demo").value;//get value in the input field
    try { 
        if(x == "")  throw "empty";
        if(isNaN(x)) throw "not a number";//check if x is Not a Number
        x = Number(x);//convert the input(of type text) to a number
        if(x < 5)    throw "too low";
        if(x > 10)   throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err;
    }
}