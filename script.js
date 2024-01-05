function appendNumber(number) {
    document.getElementById("display").value += number;
}

function appendOperator(operator) {
  
    var display = document.getElementById("display");
    var currentExpression = display.value;
    console.log(operator);
    display.value += operator;
  
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    var expression = document.getElementById("display").value;
    try {
        expression = expression.replace(/x/g, '*');
        var result = eval(expression);
        result = result.toFixed(3);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function deleteLastCharacter() {
    var currentExpression = document.getElementById("display").value;
    document.getElementById("display").value = currentExpression.slice(0, -1);
}

function resetCalculator() {
    document.getElementById("display").value = "";
}




function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
