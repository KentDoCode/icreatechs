let operator = null;

function setOperator(op) {
  operator = op;
  document.getElementById('selectedOperator').innerText = op;

  const buttons = document.querySelectorAll('.operator');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

function calculate() {
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please input a valid number!";
  } else if (!operator) {
    result = "Please select an operator.";
  } else {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
        break;
    }
  }

  document.getElementById('result').innerText = 'Result: ' + result;
}

function clearCalculate() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('selectedOperator').innerText = '';
  document.getElementById('result').innerText = '';
  operator = null;

  const buttons = document.querySelectorAll('.operator');
  buttons.forEach(btn => btn.classList.remove('active'));
}
