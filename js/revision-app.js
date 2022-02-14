function getInputValue() {
    const inputValue = Math.round(Math.random() * 10000);
    const inputValueString = inputValue + '';
    if (inputValueString.length == 4) {
        return inputValue;
    }
    else {
        return getInputValue();
    }
}



function generatePin() {
    const inputPin = document.getElementById('input-pin');
    inputPin.value = getInputValue();
}

document.getElementById('all-button').addEventListener('click', function (event) {
    const calcInput = document.getElementById('calc-input');
    const inputNumber = event.target.innerText;
    if (isNaN(inputNumber)) {
        if (inputNumber == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previusNumber = calcInput.value;
        const inputNumber = event.target.innerText;
        const currentNumber = previusNumber + inputNumber;
        calcInput.value = currentNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const inputPin = document.getElementById('input-pin').value;
    const calcInput = document.getElementById('calc-input').value;
    const notifyWrong = document.getElementById('notify-wrong');
    const notifyRight = document.getElementById('notify-right');
    if (inputPin == calcInput) {
        notifyRight.style.display = 'block';
        notifyWrong.style.display = 'none';
    }
    else {
        notifyRight.style.display = 'none';
        notifyWrong.style.display = 'block';
    }
})

