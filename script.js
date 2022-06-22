const number1 = parseFloat(prompt("Enter first number: "));
const operator = prompt("Enter operator to use: (+ , -, / , *,)");
const number2 = parseFloat(prompt("Enter second number: "));

let result = 0;

if (isNaN(number1) || isNaN(number2)) {
  alert("Wrong input!, Refresh webpage and try again.");
} else if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "/") {
  result = number1 / number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  alert("invalid operator, refresh page and try again");
}
alert(number1 + " " + operator + " " + number2 + "=" + result);
