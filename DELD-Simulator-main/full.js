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
let valueSum = document.getElementById("sum-inpt").value
let valueCarry = document.getElementById("carry-inpt").value
let result = document.getElementById("final")
let value = parseInt(value_A,10) + parseInt(value_B,10) + parseInt(value_C,10)
let sum = parseInt(valueSum,10)
let carry = parseInt(valueCarry,10)
    if (value == 0){
        alert("He")
        if (carry == 0 && sum == 0){
                result.textContent = "Correct"
                console.log(carry)
                console.log(sum)
                console.log(value)
                
        }
        else{
            result.textContent = "Incorrect"
            console.log(carry)
                console.log(sum)
                console.log(value)
        }
    }
    else if (value == 1){
        if (carry == 0 && sum == 1){
            result.textContent = "Correct"
            console.log(carry)
            console.log(sum)
            console.log(value)
    }
        else{
        result.textContent = "Incorrect"
            console.log(carry)
            console.log(sum)
            console.log(value)
    }
    }
    else if (value == 3){
        if (carry == 1 && sum == 1){
            result.textContent = "Correct"
            console.log(carry)
            console.log(sum)
            console.log(value)
    }
        else{
        result.textContent = "Incorrect"
        console.log(carry)
                console.log(sum)
                console.log(value)
    }
    }
    else if (value == 2){
        if (carry == 1 && sum == 0){
            result.textContent = "Correct"
            console.log(carry)
                console.log(sum)
                console.log(value)
    }
        else{
        result.textContent = "Incorrect"
        console.log(carry)
                console.log(sum)
                console.log(value)
    }
    }
    else{

    }
   
    
    
    
}