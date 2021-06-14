//querySelectorAll() finds all HTML elements that matches a specified CSS selector (id, class names, types, attributes, values of attributes, etc)
var x = document.querySelectorAll("p.intro");
document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML + "<br>" +
'The second paragraph (index 1) with class="intro: ' + x[1].innerHTML;

function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo1").innerHTML = text;
}