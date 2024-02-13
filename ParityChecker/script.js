function checkParity() {
    var bit1 = document.getElementById("bit1").checked;
    var bit2 = document.getElementById("bit2").checked;
    var bit3 = document.getElementById("bit3").checked;
    var bit4 = document.getElementById("bit4").checked;

    var sum = (bit1 ? 1 : 0) + (bit2 ? 1 : 0) + (bit3 ? 1 : 0) + (bit4 ? 1 : 0);
    var isEvenParity = sum % 2 === 0;

    // Update LEDs based on parity result
    updateLEDs(isEvenParity);

    // Update result text
    var resultElement = document.getElementById("result");
    resultElement.textContent = isEvenParity ? "" : "";
}

function updateLEDs(isEvenParity) {
    var ledEven = document.getElementById("led-even");
    


    if (isEvenParity) {
        ledEven.style.backgroundColor = "green";
        
    } else {
        ledEven.style.backgroundColor = "red";
       
    }
    // Display LEDs
    ledEven.style.display = "inline-block";
}