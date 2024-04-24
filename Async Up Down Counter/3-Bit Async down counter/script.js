let flag = false;
const powerLines = document.querySelectorAll('.powerLine');
const clockAs = document.querySelectorAll('.clockA');
const clockBs = document.querySelectorAll('.clockB');
const clockCs = document.querySelectorAll('.clockC');
const outputAs = document.querySelectorAll('.outputA');
const outputBs = document.querySelectorAll('.outputB');
const outputCs = document.querySelectorAll('.outputC');
const QA = document.getElementById("QA");
const QB = document.getElementById("QB");
const QC = document.getElementById("QC");
const clkbtn = document.getElementsByClassName("clk")[0];
const vcc = document.getElementsByClassName("vcc")[0];


let colorPowerLine = '#1e1e1e';
let colorClockA = '#1e1e1e';
let colorClockB = '#1e1e1e';
let colorClockC = '#1e1e1e';
let colorOutputA = '#1e1e1e';
let colorOutputB = '#1e1e1e';
let colorOutputC = '#1e1e1e';

function backgroundUpdate(){
    powerLines.forEach(powerLine => {
        powerLine.setAttribute('stroke', colorPowerLine);
    });
    clockAs.forEach(clockA => {
        clockA.setAttribute('stroke', colorClockA);
    });
    clockBs.forEach(clockB => {
        clockB.setAttribute('stroke', colorClockB);
    });
    clockCs.forEach(clockC => {
        clockC.setAttribute('stroke', colorClockC);
    });
    outputAs.forEach(outputA => {
        outputA.setAttribute('stroke', colorOutputA);
    });
    outputBs.forEach(outputB => {
        outputB.setAttribute('stroke', colorOutputB);
    });
    outputCs.forEach(outputC => {
        outputC.setAttribute('stroke', colorOutputC);
    });
}

let counter = -1;

function start(){
    if(flag==true){
        flag = false;
        colorPowerLine = '#1e1e1e';
        colorClockA = '#1e1e1e';
        colorClockB = '#1e1e1e';
        colorClockC = '#1e1e1e';
        colorOutputA = '#1e1e1e';
        colorOutputB = '#1e1e1e';
        colorOutputC = '#1e1e1e';
        backgroundUpdate();
        vcc.style.backgroundColor = "transparent";
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        
        clkbtn.setAttribute("disabled", "");
        resetBtn.removeAttribute("disabled");
        counter = -1;
        return;
    }
    else{
        //START
        flag = true;
        vcc.style.backgroundColor = "orange";
        clkbtn.removeAttribute("disabled");
        colorPowerLine = '#ff0000';
        backgroundUpdate();
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        counter = -1;
        resetBtn.setAttribute("disabled","");

    }

}

function decCount(){
    srNo = srNo + 1;
    counter = counter - 1;
    if (counter<0){
        counter = 7;
    }

    switch(counter){
        case 7:
            colorPowerLine = '#ff0000';
            colorClockA = '#ffff00';
            colorClockB = '#1e1e1e';
            colorClockC = '#1e1e1e';
            colorOutputA = '#ffff00';
            colorOutputB = '#ffff00';
            colorOutputC = '#ffff00';
            appendTable(srNo, 1, 1, 1);
            
            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "yellow";

            break;
        case 6:
            colorPowerLine = '#ff0000';
            colorClockA = '#1e1e1e';
            colorClockB = '#ffff00';
            colorClockC = '#1e1e1e';
            colorOutputA = '#1e1e1e';
            colorOutputB = '#ffff00';
            colorOutputC = '#ffff00';
            appendTable(srNo, 0, 1, 1);

            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "yellow";

            break;
        case 5:
            colorClockA = '#ffff00';
            colorClockB = '#1e1e1e';
            colorClockC = '#ffff00';
            colorOutputA = '#ffff00';
            colorOutputB = '#1e1e1e';
            colorOutputC = '#ffff00';
            appendTable(srNo, 1, 0, 1);

            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "yellow";

            break;
        case 4:
            colorClockA = '#1e1e1e';
            colorClockB = '#ffff00';
            colorClockC = '#ffff00';
            appendTable(srNo, 0, 0, 1);

            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "yellow";

            colorOutputA = '#1e1e1e';
            colorOutputB = '#1e1e1e';
            colorOutputC = '#ffff00';
            break;
        case 3:
            colorClockA = '#ffff00';
            colorClockB = '#1e1e1e';
            colorClockC = '#1e1e1e';

            colorOutputA = '#ffff00';
            colorOutputB = '#ffff00';
            colorOutputC = '#1e1e1e';
            appendTable(srNo, 1, 1, 0);

            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "transparent";

            break;

        case 2:
            colorClockA = '#1e1e1e';
            colorClockB = '#ffff00';
            colorClockC = '#1e1e1e';

            colorOutputA = '#1e1e1e';
            colorOutputB = '#ffff00';
            colorOutputC = '#1e1e1e';
            appendTable(srNo, 0, 1, 0);

            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "yellow";
            QC.style.backgroundColor = "transparent";
            break;

        case 1:
            colorClockA = '#ffff00';
            colorClockB = '#1e1e1e';
            colorClockC = '#ffff00';

            colorOutputA = '#ffff00';
            colorOutputB = '#1e1e1e';
            colorOutputC = '#1e1e1e';
            appendTable(srNo, 1, 0, 0);

            QA.style.backgroundColor = "yellow";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "transparent";

            break;
        case 0:
            colorClockA = '#1e1e1e';
            colorClockB = '#ffff00';
            colorClockC = '#ffff00';


            colorOutputA = '#1e1e1e';
            colorOutputB = '#1e1e1e';
            colorOutputC = '#1e1e1e';
            appendTable(srNo, 0, 0, 0);

            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "transparent";
            break;
        default:

    }

    backgroundUpdate();

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