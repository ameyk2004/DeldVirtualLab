function execute1() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var input3 = document.getElementById("input3");
    var input4 = document.getElementById("input4");

    input1.addEventListener("change", updateNumber);
    input2.addEventListener("change", updateNumber);
    input3.addEventListener("change", updateNumber);
    input4.addEventListener("change", updateNumber);
}

function updateNumber() {
    var binaryValue = "";

    binaryValue += document.getElementById("input1").checked ? "1" : "0";
    binaryValue += document.getElementById("input2").checked ? "1" : "0";
    binaryValue += document.getElementById("input3").checked ? "1" : "0";
    binaryValue += document.getElementById("input4").checked ? "1" : "0";

    var decimalValue = parseInt(binaryValue, 2);
    var updateDecimal;
    if (decimalValue > 9) {
        alert("Invalid BCD Number");

        document.getElementById("input1").checked = false;
        document.getElementById("input2").checked = false;
        document.getElementById("input3").checked = false;
        document.getElementById("input4").checked = false;
        for (var i = 0; i <= 3; i++) {
            document.getElementById("led" + i).classList.remove("on")
        }
    } else {
        updateDecimal = decimalValue + 3;

        for (var i = 0; i <= 3; i++) {
            document.getElementById("led" + i).classList.remove("on")
        }

        var binaryResult = (updateDecimal).toString(2);

        while (binaryResult.length < 4) {
            binaryResult = "0" + binaryResult;
        }

        // XOR each bit with 1 for excess-3
        binaryResult = binaryResult.split("").map(bit => (bit === "1" ? "1" : "0")).join("");

        if (binaryResult[0] == "1") {
            document.getElementById("led" + 3).classList.add("on")
        }
        if (binaryResult[1] == "1") {
            document.getElementById("led" + 2).classList.add("on")
        }
        if (binaryResult[2] == "1") {
            document.getElementById("led" + 1).classList.add("on")
        }
        if (binaryResult[3] == "1") {
            document.getElementById("led" + 0).classList.add("on")
        }

        console.log("Binary Result: " + binaryResult);
    }
}
