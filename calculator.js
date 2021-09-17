function calculateAddition(a,b){ return a+b; }
function calculateSubtraktion(a,b) { return a-b; }
function calculateMultiplikation(a,b){ return a*b; }
function calculateDivision(a,b) { return a/b; }


let firstDigit, secondDigit, operator;
let isThereAString = false;

function operate(opString)
{
       
    let indexOfOperator;
    let returnValue = 0;
    

    if(opString.includes("+")) indexOfOperator = opString.indexOf("+");
    else if (opString.includes("-")) indexOfOperator = opString.indexOf("-");
    else if (opString.includes("×")) indexOfOperator = opString.indexOf("×");
    else if (opString.includes("÷")) indexOfOperator = opString.indexOf("÷");
    
    firstDigit = parseInt(opString.slice(0,indexOfOperator));
    secondDigit =  parseInt(opString.slice(indexOfOperator+1));
    operator = opString.charAt(indexOfOperator);
    
    console.log(firstDigit);
    console.log(secondDigit);
    console.log(operator);

    
    if(operator == "+") returnValue = calculateAddition(firstDigit,secondDigit);
    else if (operator =="-") returnValue = calculateSubtraktion(firstDigit,secondDigit);
    else if (operator =="×") returnValue = calculateMultiplikation(firstDigit,secondDigit);
    else if (operator =="÷") returnValue = calculateDivision(firstDigit,secondDigit);

    return returnValue;
}

const onButton = document.querySelector('#onButton');
const clearButton = document.querySelector('#clearButton');
const equalsButton = document.querySelector('#equalsButton');

const numberButtons = document.querySelectorAll('.numberButton');
const operatorButtons = document.querySelectorAll('.operatorButton');

const outputPara = document.querySelector('#operationParagraph');
//const resultPara = document.querySelector('#resultParagraph');

let finalString =""; 

numberButtons.forEach(number => {
    number.addEventListener('click',function(){
       finalString = finalString + number.textContent;
       outputPara.textContent = finalString;
    });
});

operatorButtons.forEach(operator => {
    operator.addEventListener('click',function(){
        finalString = finalString + operator.textContent;
        outputPara.textContent = finalString;
    });
});

equalsButton.addEventListener('click',function(){
    outputPara.textContent = '';
    outputPara.textContent = operate(finalString);
    isThereAString = true;
    finalString = operate(finalString);
    outputPara.textContent = finalString;
});

clearButton.addEventListener('click',function(){
    outputPara.textContent = ''; 
    firstDigit = null; 
    secondDigit = null;
    operator = null;
    finalString ='';
})




