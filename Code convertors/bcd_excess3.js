document.addEventListener('DOMContentLoaded', function () {
    const inputs = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const leds = Array.from(document.querySelectorAll('.led'));
    const smallerOutput = document.getElementById('smaller');
    const equalOutput = document.getElementById('equal');
    const greaterOutput = document.getElementById('greater');

    function updateLEDsAndOutputs() {
        // Get binary value from inputs
        const binaryValue = inputs.map(input => input.checked ? '1' : '0').join('');

        // Convert binary to Gray code
        const grayCode = binaryToGrayCode(binaryValue);

        // Update LEDs based on Gray code
        for (let i = 0; i < leds.length; i++) {
            leds[i].classList.toggle('on', grayCode[i] === '1');
        }

       
    }

    function binaryToGrayCode(binary) {
        let grayCode = binary[0];

        for (let i = 1; i < binary.length; i++) {
            grayCode += binary[i - 1] !== binary[i] ? '1' : '0';
        }

        return grayCode;
    }

    // Attach event listeners to inputs
    inputs.forEach(input => {
        input.addEventListener('change', updateLEDsAndOutputs);
    });

    // Initial update
    updateLEDsAndOutputs();
});
