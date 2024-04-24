const outputContainer = document.querySelector('.output-container');
function Adder() {
    var sum_led = document.getElementById("result_led");
    var carryOut_led = document.getElementById("carryout_led");
    var sum;
    var carryout;
    let inputA = document.getElementById("A");
    let inputB = document.getElementById("B");
    let inputC = document.getElementById("carryIn");

    if (inputA.checked) {
        var valueA = 1;
    }
    else {
        var valueA = 0;
    }
    if (inputB.checked) {
        var valueB = 1;
    }
    else {

        var valueB = 0;
    }

    if (inputC.checked) {
        var valueC = 1;
    }
    else {

        var valueC = 0;
    }

    var value = parseInt(valueA, 10) + parseInt(valueB, 10) + parseInt(valueC, 10)

    if (value == 0) {
        sum_led.classList.remove("on");
        carryOut_led.classList.remove("on");
        sum = 0;
        carryout = 0

    }

    else if (value == 1) {
        sum_led.classList.add("on");
        carryOut_led.classList.remove("on");
        sum = 1;
        carryout = 0;
    }

    else if (value == 2) {
        sum_led.classList.remove("on");
        carryOut_led.classList.add("on");
        sum = 0;
        carryout = 1;
    }

    else if (value == 3) {
        sum_led.classList.add("on");
        carryOut_led.classList.add("on");
        sum = 1;
        carryout = 1;
    }

    // outputContainer.innerHTML += `
    // <div class="child">
    //     <div class="inputA">${valueA}</div>
    //     <div class="inputB">${valueB}</div>
    //     <div class="Carry In">${valueC}</div>
    //     <div class="sum">${sum} ${outputStr} (${sum})</div>
    //     <div class="Carry Out">${carryout}</div>
    // </div> 
    // `

}
