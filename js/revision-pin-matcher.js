function generatePin() {
    const inputPin = document.getElementById('input-pin');
    const inputPinNumber = Math.round(Math.random() * 10000);
    const inputPinString = inputPinNumber + '';
    if (inputPinString.length == 4) {
        inputPin.value = inputPinNumber;
    }
    else {
        return generatePin();
    }
}

document.getElementById('all-button').addEventListener('click', function (event) {
    const calcInput = document.getElementById('calc-input');
    if (isNaN(event.target.innerText)) {
        if (event.target.innerText == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const calcInput = document.getElementById('calc-input');
        const calcInputText = calcInput.value;
        calcInput.value = calcInputText + event.target.innerText;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const inputPin = document.getElementById('input-pin');
    const inputPinNumber = inputPin.value;
    const calcInput = document.getElementById('calc-input');
    const calcInputText = calcInput.value;
    if (calcInputText == inputPinNumber) {
        document.getElementById('notify-right').style.display = 'block';
        document.getElementById('notify-wrong').style.display = 'none';
    }
    else {
        document.getElementById('notify-right').style.display = 'none';
        document.getElementById('notify-wrong').style.display = 'block';
    }

})