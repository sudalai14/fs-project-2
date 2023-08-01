// Get references to the elements
const formElement = document.getElementById('calculator-form');
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const operationElement = document.getElementById('operation');
const resultElement = document.getElementById('result');

// Function to perform the calculation
function calculate() {
  const num1 = parseFloat(num1Element.value);
  const num2 = parseFloat(num2Element.value);
  const operation = operationElement.value;

  let result;

  if (operation === 'add') {
    result = num1 + num2;
  } else if (operation === 'subtract') {
    result = num1 - num2;
  } else if (operation === 'multiply') {
    result = num1 * num2;
  } else if (operation === 'divide') {
    result = num1 / num2;
  } else {
    result = 'Invalid operation';
  }

  resultElement.textContent = isNaN(result) ? 'Invalid input' : result;
}

// Add submit event listener to the form
formElement.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from submitting and refreshing the page
  calculate();
});
