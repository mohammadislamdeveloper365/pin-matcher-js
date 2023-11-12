let randomPin;
function getElement(id) {
    return document.getElementById(id);
}

function getFieldValue(id, isInput) {
    let field = getElement(id);
    if(isInput) 
    return field.value;
    else return field.innerText;
}
function generateRandomNumber() {
    let randomNumber =  Math.round(Math.random()*10000).toString();
    while(randomNumber.length !== 3){
        randomNumber = Math.round(Math.random()*1000).toString();
    }
    return randomNumber;
}
getElement('pin-generator-btn').addEventListener('click',function(){
    getElement('generator-input').value = 'Enter the generated pin in the calculator box'
    randomPin= generateRandomNumber();
})

getElement('calculator-container').addEventListener('click',function (event) {
    const number = event.target.innerText;
    let inputFieldValue = getFieldValue('calculator-input',true);
    if(isNaN(number)) {
        if(number === 'C') 
        getElement('calculator-input').value = '';

        else if(number === '<') {
            let newNumber = inputFieldValue.slice(0,inputFieldValue.length-1)
            getElement('calculator-input').value = newNumber;
        }
        
    }

    else {
        getElement('calculator-input').value = inputFieldValue + number;
    }
})

getElement('pin-checker').addEventListener('click',function () {
    const generatorInputField = getElement('generator-input');
    const calculatorInputValue = getFieldValue('calculator-input',true);
    let successField = getElement('success-message');
    let unSuccessField = getElement('unsuccess-message');
    let calculatorField = getElement('calculator-input');
    if(randomPin === calculatorInputValue) {
        generatorInputField.value = "You won!!!Pin Matched";
        getElement('success-message').style.display = 'block';
        unSuccessField.style.display = 'none';
        calculatorField.value = ''
    }

    else {
        generatorInputField.value = "You Lost!!! The pin was: " + randomPin;
        unSuccessField.style.display = 'block';
        successField.style.display = 'none';
        calculatorField.value = ''
    }
})