function calculateBCD() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;


    if (!isValidBCD(input1) || !isValidBCD(input2)) {
        document.getElementById("result").innerText = "Invalid 4-bit or 8-bit BCD input!";
        return;
    }

    input1 = input1.length === 4 ? '0000' + input1 : input1;
    input2 = input2.length === 4 ? '0000' + input2 : input2;

    var num1LowNibble = parseInt(input1.substr(4, 4), 2);
    var num1HighNibble = parseInt(input1.substr(0, 4), 2);
    var num2LowNibble = parseInt(input2.substr(4, 4), 2);
    var num2HighNibble = parseInt(input2.substr(0, 4), 2);

    var lowNibbleSum = num1LowNibble + num2LowNibble;
    var highNibbleSum = num1HighNibble + num2HighNibble;

    if (lowNibbleSum > 9) {
        lowNibbleSum -= 10;
        highNibbleSum++;
    }

    var thirdBCD = 0;
    if (highNibbleSum > 9) {
        thirdBCD = 1;
        highNibbleSum -= 10;
    }

    if (highNibbleSum > 9) {
        document.getElementById("result").innerText = "Sum of high nibbles exceeds 4-bit BCD limit! Adding 1 to handle carryover.";
        return;
    }

    var bcdLowNibble = lowNibbleSum.toString(2).padStart(4, '0');
    var bcdHighNibble = highNibbleSum.toString(2).padStart(4, '0');
    var bcdCarry = thirdBCD.toString(2).padStart(4, '0');

    var bcdSum = bcdHighNibble + ' ' + bcdLowNibble;
    var bcdCarryResult = bcdCarry;

    document.getElementById("result").innerText = "Input : " + (num1HighNibble * 10 + num1LowNibble) + " , " + (num2HighNibble * 10 + num2LowNibble) + "\nDecimal Sum: " + (highNibbleSum * 10 + lowNibbleSum + thirdBCD * 100) + "\nBCD Sum: " + bcdCarryResult +" "+ bcdSum;
}



function isValidBCD(bcd) {
    return /^[01]{4}$/.test(bcd) || /^[01]{8}$/.test(bcd);
}
