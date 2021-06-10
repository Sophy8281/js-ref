function findMax() {
    var i;
    var max = -Infinity;
    for(i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
} 
document.getElementById("demo").innerHTML = findMax(4, 5, 6);
function sumAll() {
    var i;
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
} 
document.getElementById("demo1").innerHTML =
sumAll(1, 123, 500, 115, 44, 88);