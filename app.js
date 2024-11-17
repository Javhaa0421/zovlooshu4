let currentInput = 0;
let first = null;
let operatorInput = null;
const display = document.getElementById('display');

function clearDisplay(){
    currentInput =0;
    display.innerText=0;
    first = null;
    operatorInput = null;
    second= null;
    updateDisplay();
}
function appendNumber(number) {
    if (currentInput == '0') {
        currentInput = number.toString();
    } else {
        currentInput = currentInput+number.toString();
    }
    updateDisplay();
}
function appendDot() {
    if (!currentInput.includes('.')) {
      currentInput =currentInput+'.';
      updateDisplay();
    }
}
function toggleSign() {
    currentInput = currentInput * Math.floor(-1).toString();
    updateDisplay();
}
function percent() {
    currentInput =currentInput / Math.floor(100).toString();
    updateDisplay();
}
function operator(op) {
    if (operatorInput !== 0) calculate();
    first = parseFloat(currentInput);
    console.log(first);
    currentInput =0;
    operatorInput = op;
    shouldResetScreen = true;
}
function calculate(){
    display.innerText=0;
    if (operatorInput == null) return;
    let second = parseFloat(currentInput);
    console.log(second);
    let result;
    switch (operatorInput) {
        case '+':
            result = first + second;
            break;
        case '-':
            result = first - second;
            break;
        case '*':
            result = first * second;
            break;
        case '/':
            result = first / second;
            break;
        default:
            return;
    }
    console.log(result);
    currentInput = result.toString();
    operatorInput = null;
    updateDisplay();
}
function updateDisplay() {
    display.textContent = currentInput;
}