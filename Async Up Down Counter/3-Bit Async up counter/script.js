const diagram = document.getElementsByClassName("diagram")[0];
const clkbtn = document.getElementsByClassName("clk")[0];
const vcc = document.getElementsByClassName("vcc")[0];
const powerLines = document.querySelectorAll('.powerLine');
const inputAs = document.querySelectorAll('.inputA');
const inputBs = document.querySelectorAll('.inputB');
const inputCs = document.querySelectorAll('.inputC');
const outputC = document.querySelectorAll('.outputC');

const QA = document.getElementById("QA");
const QB = document.getElementById("QB");
const QC = document.getElementById("QC");

let colorPowerLine = '#1e1e1e';
let colorInputA = '#1e1e1e';
let colorInputB = '#1e1e1e';
let colorInputC = '#1e1e1e';
let colorOutputC = '#1e1e1e';

function backgroundUpdate(){
    powerLines.forEach(powerLine => {
        powerLine.setAttribute('stroke', colorPowerLine);
    });
    inputAs.forEach(input => {
        input.setAttribute('stroke', colorInputA);
    });
    inputBs.forEach(input => {
        input.setAttribute('stroke', colorInputB);
    });
    inputCs.forEach(input => {
        input.setAttribute('stroke', colorInputC);
    });
    outputC.forEach(output => {
        output.setAttribute('stroke', colorOutputC);
    });
}

let counter = -1;
let toggle = false;
function start(){
    if(toggle===false){
        toggle = true;
        vcc.style.backgroundColor = "orange";
        colorPowerLine = '#ff0000';
        colorInputA = '#1e1e1e';
        colorInputB = '#1e1e1e';
        colorInputC = '#1e1e1e';
        colorOutputC = '#1e1e1e';
        resetBtn.setAttribute("disabled","");
        backgroundUpdate();
    }
    else{
        toggle = false;
        vcc.style.backgroundColor = "transparent";
        resetBtn.removeAttribute("disabled");
        clkbtn.setAttribute("disabled", "");
        counter = -1;
        colorPowerLine = '#1e1e1e';
        colorInputA = '#1e1e1e';
        colorInputB = '#1e1e1e';
        colorInputC = '#1e1e1e';
        colorOutputC = '#1e1e1e';
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        backgroundUpdate()
        return;
    }
    clkbtn.removeAttribute("disabled");
    console.log("Start");
    QA.style.backgroundColor = "transparent";
    QB.style.backgroundColor = "transparent";
    QC.style.backgroundColor = "transparent";
    counter = -1;
}



function incCount(){
    srNo = srNo + 1;
    counter = counter + 1;
    if(counter >= 8){
        counter = 0;
    }

    switch(counter){
        case 0:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-000.svg')";
            colorInputA = '#ffff00';
            colorInputB = '#1e1e1e';
            colorInputC = '#1e1e1e';
            colorOutputC = '#1e1e1e';
            backgroundUpdate();
            appendTable(srNo, 0, 0, 0);
            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "transparent";
            break;
        case 1:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-001.svg')";
            colorInputA = '#1e1e1e';
            colorInputB = '#ffff00';
            colorInputC = '#1e1e1e';
            colorOutputC = '#1e1e1e';
            backgroundUpdate();
            appendTable(srNo, 1, 0, 0);
            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "transparent";
            break;
        case 2:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-010.svg')";
            colorInputA = '#ffff00';
            colorInputB = '#1e1e1e';
            colorInputC = '#ffff00';
            colorOutputC = '#1e1e1e';
            backgroundUpdate();
            appendTable(srNo, 0, 1, 0);
            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "transparent";
            break;
        case 3:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-011.svg')";
            colorInputA = '#1e1e1e';
            colorInputB = '#ffff00';
            colorInputC = '#ffff00';
            colorOutputC = '#1e1e1e';
            backgroundUpdate();
            appendTable(srNo, 1, 1, 0);
            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "transparent";
            break;
        case 4:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-100.svg')";
            colorInputA = '#ffff00';
            colorInputB = '#1e1e1e';
            colorInputC = '#1e1e1e';
            colorOutputC = '#ffff00';
            backgroundUpdate();
            appendTable(srNo, 0, 0, 1);
            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "yellow";
            break;
        case 5:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-101.svg')";
            colorInputA = '#1e1e1e';
            colorInputB = '#ffff00';
            colorInputC = '#1e1e1e';
            colorOutputC = '#ffff00';
            backgroundUpdate();
            appendTable(srNo, 1, 0, 1);
            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "yellow";
            break;
        case 6:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-110.svg')";
            colorInputA = '#ffff00';
            colorInputB = '#1e1e1e';
            colorInputC = '#ffff00';
            colorOutputC = '#ffff00';
            backgroundUpdate();
            appendTable(srNo, 0, 1, 1);
            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "yellow";
            break;
        case 7:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on-111.svg')";
            colorInputA = '#1e1e1e';
            colorInputB = '#ffff00';
            colorInputC = '#ffff00';
            colorOutputC = '#ffff00';
            backgroundUpdate();
            appendTable(srNo, 1, 1, 1);
            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "yellow";
            break;
        default:
            // diagram.style.backgroundImage = "url('img/3_bit_async_up_counter-on.svg')";
            colorInputA = '#1e1e1e';
            colorInputB = '#1e1e1e';
            colorInputC = '#1e1e1e';
            colorOutputC = '#1e1e1e';
            backgroundUpdate();
            appendTable(0, 0, 0, 0);
    }
}

const tbody = document.getElementsByTagName('tbody')[0];
const resetBtn = document.getElementById('reset');
let srNo = -1;

function reset(){
    tbody.innerHTML = ``;
    srNo = -1;

}

function appendTable(srNo, qA, qB, qC){
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th scope="row">${srNo}</th>
        <td>${qA}</td>
        <td>${qB}</td>
        <td>${qC}</td>
    `;
    tbody.appendChild(newRow);
}