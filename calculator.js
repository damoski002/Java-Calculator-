var x = window.prompt("Enter value of first number x");
var y = window.prompt("Enter value of second number y");

x = parseFloat(x);
y = parseFloat(y);

const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');

    if (operator == "+"){
        result = x + y;
    }
    else if (operator == "-"){
        result = x - y;
    }
    else if (operator == "*"){
        result = x * y;
    }
    else if (operator == "/"){
        result = x / y;
    }

    window.alert(" Result is:  " + result);
