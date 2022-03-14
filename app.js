var a = () => parseInt(document.getElementById("number-a").value);
var b = () => parseInt(document.getElementById("number-b").value);



var sum = (a, b) => a + b;
  //console.log(sum(3, 4));  

var divide = (a, b) => a / b;
console.log(divide(4, 2));


var subtract = (a, b) => a - b;
console.log(subtract(8, 4))


var multiplay = (a, b) => a * b;
console.log(multiplay(4, 4));


 handleButtonClick = () => alert(sum(a(), b()));
var sumResult = document.getElementById("addition").addEventListener("click", handleButtonClick);
//document.getElementById("result").innerText = handleButtonClick;


var handleButtonClick = () => alert(divide(a(), b()));
var divideResult = document.getElementById("divided").addEventListener("click", handleButtonClick);
//document.getElementById("result").innerText = divideResult;
 

var handleButtonClick = () => alert(subtract(a(), b()));
var subtractResult = document.getElementById("subtraction").addEventListener("click", handleButtonClick);
//document.getElementById("result").innerText = subtractResult;
 


var handleButtonClick = () => alert(multiplay(a(), b()));
var multiResult = document.getElementById("multiplication").addEventListener("click", handleButtonClick);
//document.getElementById("result").innerText = multiResult;
 













