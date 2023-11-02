function validateInput(inputField) {
    const userInput = inputField.value;

    if (userInput == 0 ) {
        // Input is correct, do nothing
    } else if (userInput == 1) {
        // Input is incorrect, clear the input field
        
    }
    else{
        inputField.value = "";
    }
}

function full(){
let value_A = document.getElementById("A-inpt").value
let value_B = document.getElementById("B-inpt").value
let value_C = document.getElementById("C-inpt").value
let valueSum = document.getElementById("Sum")
let valueCarry = document.getElementById("Carry")
let value = parseInt(value_A,10) + parseInt(value_B,10) + parseInt(value_C,10)
    if (value == 0){
        valueCarry.textContent = 0
        valueSum.textContent = 0
    }
    else if (value == 1){
       valueCarry.textContent = 0
       valueSum.textContent = 1
    }
    else if (value == 3){
        valueSum.textContent = 1
        valueCarry.textContent = 1
    }
    else if (value == 2){
        valueCarry.textContent = 1
        valueSum.textContent = 0
    }
    else{

    }
}