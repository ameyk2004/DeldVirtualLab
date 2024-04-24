let flag = false;
const powerLines = document.querySelectorAll('.powerLine');

const inputM = document.querySelectorAll('.inputM');
const inputM_not = document.querySelectorAll('.inputM_not');
const clkA = document.querySelectorAll('.clkA');
const clkB = document.querySelectorAll('.clkB');
const clkC = document.querySelectorAll('.clkC');
const outputC = document.querySelectorAll('.outputC');
const QAline = document.querySelectorAll('.QA');
const QAbarline = document.querySelectorAll('.QAbar');
const QBline = document.querySelectorAll('.QB');
const QBbarline = document.querySelectorAll('.QBbar');
const QCline = document.querySelectorAll('.QC');
const QCbarline = document.querySelectorAll('.QCbar');
const AND_Q_A = document.querySelectorAll('.AND_Q_A');
const AND_Q_A_bar = document.querySelectorAll('.AND_Q_A_bar');
const AND_Q_B = document.querySelectorAll('.AND_Q_B');
const AND_Q_B_bar = document.querySelectorAll('.AND_Q_B_bar');
const AND_Q_C = document.querySelectorAll('.AND_Q_C');
const AND_Q_C_bar = document.querySelectorAll('.AND_Q_C_bar');

const btn_cursor = document.getElementById("btn-cursor");
const M_input_btn = document.getElementById("Mode_input_btn");
const QA = document.getElementById("QA");
const QB = document.getElementById("QB");
const QC = document.getElementById("QC");
const clkbtn = document.getElementsByClassName("clk")[0];
const vcc = document.getElementsByClassName("vcc")[0];


let colorPowerLine = '#1e1e1e';
let colorinputM = '#1e1e1e';
let colorinputM_not = '#1e1e1e';
let colorclkA = '#1e1e1e';
let colorclkB = '#1e1e1e';
let colorclkC = '#1e1e1e';
let coloroutputC = '#1e1e1e';
let colorQAline = '#1e1e1e';
let colorQAbarline = '#1e1e1e';
let colorQBline = '#1e1e1e';
let colorQBbarline = '#1e1e1e';
let colorQCline = '#1e1e1e';
let colorQCbarline = '#1e1e1e';
let colorAND_Q_A = '#1e1e1e';
let colorAND_Q_A_bar = '#1e1e1e';
let colorAND_Q_B = '#1e1e1e';
let colorAND_Q_B_bar = '#1e1e1e';
let colorAND_Q_C = '#1e1e1e';
let colorAND_Q_C_bar = '#1e1e1e';


function backgroundUpdate(){
    powerLines.forEach(line => {
        line.setAttribute('stroke', colorPowerLine);
    });
    inputM.forEach(line => {
        line.setAttribute('stroke', colorinputM);
    });
    inputM_not.forEach(line => {
        line.setAttribute('stroke', colorinputM_not);
    });
    clkA.forEach(line => {
        line.setAttribute('stroke', colorclkA);
    });
    clkB.forEach(line => {
        line.setAttribute('stroke', colorclkB);
    });
    clkC.forEach(line => {
        line.setAttribute('stroke', colorclkC);
    });
    outputC.forEach(line => {
        line.setAttribute('stroke', coloroutputC);
    });
    QAline.forEach(line => {
        line.setAttribute('stroke', colorQAline);
    });
    QAbarline.forEach(line => {
        line.setAttribute('stroke', colorQAbarline);
    });
    QBline.forEach(line => {
        line.setAttribute('stroke', colorQBline);
    });
    QBbarline.forEach(line => {
        line.setAttribute('stroke', colorQBbarline);
    });
    QCline.forEach(line => {
        line.setAttribute('stroke', colorQCline);
    });
    QCbarline.forEach(line => {
        line.setAttribute('stroke', colorQCbarline);
    });
    AND_Q_A.forEach(line => {
        line.setAttribute('stroke', colorAND_Q_A);
    });
    AND_Q_A_bar.forEach(line => {
        line.setAttribute('stroke', colorAND_Q_A_bar);
    });
    AND_Q_B.forEach(line => {
        line.setAttribute('stroke', colorAND_Q_B);
    });
    AND_Q_B_bar.forEach(line => {
        line.setAttribute('stroke', colorAND_Q_B_bar);
    });
    AND_Q_C.forEach(line => {
        line.setAttribute('stroke', colorAND_Q_C);
    });
    AND_Q_C_bar.forEach(line => {
        line.setAttribute('stroke', colorAND_Q_C_bar);
    });
    
}

let mode = false;

M_input_btn.addEventListener("change", function() {
    if (this.checked) {
        mode = true;
    } else {
        mode = false;
    }
});

function start(){
    if(flag==true){
        flag = false;
        colorPowerLine = '#1e1e1e';
        colorinputM = '#1e1e1e';
        colorinputM_not = '#1e1e1e';
        colorclkA = '#1e1e1e';
        colorclkB = '#1e1e1e';
        colorclkC = '#1e1e1e';
        coloroutputC = '#1e1e1e';
        colorQAline = '#1e1e1e';
        colorQAbarline = '#1e1e1e';
        colorQBline = '#1e1e1e';
        colorQBbarline = '#1e1e1e';
        colorQCline = '#1e1e1e';
        colorQCbarline = '#1e1e1e';
        colorAND_Q_A = '#1e1e1e';
        colorAND_Q_A_bar = '#1e1e1e';
        colorAND_Q_B = '#1e1e1e';
        colorAND_Q_B_bar = '#1e1e1e';
        colorAND_Q_C = '#1e1e1e';
        colorAND_Q_C_bar = '#1e1e1e';
        
        backgroundUpdate();
        vcc.style.backgroundColor = "transparent";
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        clkbtn.setAttribute("disabled", "");
        M_input_btn.removeAttribute("disabled","");
        resetBtn.removeAttribute("disabled");
        btn_cursor.style.cursor = "pointer";
        counter = -1;
        return;
    }
    else{
        //START
        flag = true;

        vcc.style.backgroundColor = "orange";
        clkbtn.removeAttribute("disabled");
        M_input_btn.setAttribute("disabled","");
        resetBtn.setAttribute("disabled","");

        btn_cursor.style.cursor = "not-allowed";
        colorPowerLine = '#ff0000';
        if(mode==false){
            colorinputM_not = '#0000ff';
            colorinputM = '#1e1e1e';
        }
        else{
            colorinputM_not = '#1e1e1e';
            colorinputM = '#0000ff';
        }

        backgroundUpdate();
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        counter = -1;

    }

}

function clk(){
    if(mode==false){
        incCount();
    }
    else{
        decCount();
    }
}

function incCount(){
    srNo = srNo + 1;
    counter = counter + 1;
    if(counter>7){
        counter = 0;
    }

    switch(counter){
        case 0:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A = '#1e1e1e';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#FFA500';
            
            QA.style.backgroundColor = "transparent"; 
            // FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B = '#1e1e1e';
            colorQBbarline  = '#FFA500';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C = '#1e1e1e';
            colorQCbarline = '#FFA500';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            //FF-4 Over
            appendTable(srNo, 0, 0, 0, 0);
            break;
        case 1:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorAND_Q_A = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "#FFFF00";
            // FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B = '#1e1e1e';
            colorQBbarline  = '#FFA500';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C = '#1e1e1e';
            colorQCbarline = '#FFA500';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            //FF-4 Over
            appendTable(srNo, 0, 1, 0, 0);
            break;
        case 2:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A = '#1e1e1e';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#FFA500';
            
            QA.style.backgroundColor = "transparent"; 
            // FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B = '#FFA500';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C = '#1e1e1e';
            colorQCbarline = '#FFA500';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            //FF-4 Over
            appendTable(srNo, 0, 0, 1, 0);
            break;
        case 3:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorAND_Q_A = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "#FFFF00";
            // FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B = '#FFA500';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C = '#1e1e1e';
            colorQCbarline = '#FFA500';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            //FF-4 Over
            appendTable(srNo, 0, 1, 1, 0);
            break;
        case 4:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A = '#1e1e1e';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#FFA500';
            
            QA.style.backgroundColor = "transparent"; 
            // FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B = '#1e1e1e';
            colorQBbarline  = '#FFA500';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C = '#FFA500';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            //FF-4 Over
            appendTable(srNo, 0, 0, 0, 1);
            break;
        case 5:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorAND_Q_A = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "#FFFF00";
            // FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B = '#1e1e1e';
            colorQBbarline  = '#FFA500';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C = '#FFA500';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            //FF-4 Over
            appendTable(srNo, 0, 1, 0, 1);
            break;
        case 6:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A = '#1e1e1e';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#FFA500';
            
            QA.style.backgroundColor = "transparent";
            // FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B = '#FFA500';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C = '#FFA500';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            //FF-4 Over
            appendTable(srNo, 0, 0, 1, 1);
            break;
        case 7:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorAND_Q_A = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "#FFFF00";
            // FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B = '#FFA500';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C = '#FFA500';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            //FF-4 Over
            appendTable(srNo, 0, 1, 1, 1);
            break;
        default:
            colorclkA = '#1e1e1e';
            colorQAline = '#1e1e1e';
            colorAND_Q_A = '#1e1e1e';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#FFA500';
            
            QA.style.backgroundColor = "transparent";
            // FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B = '#1e1e1e';
            colorQBbarline  = '#FFA500';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C = '#1e1e1e';
            colorQCbarline = '#FFA500';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            //FF-4 Over
    }
    
    backgroundUpdate();
}

function decCount(){
    srNo = srNo + 1;
    counter = counter - 1;
    if (counter<0){
        counter = 7;
    }

    switch(counter){
        case 7:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A_bar = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#FFA500';
            QA.style.backgroundColor = "#FFFF00";
            //FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B_bar = '#FFA500';
            colorQBbarline  = '#FFA500';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C_bar = '#FFA500';
            colorQCbarline = '#FFA500';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            appendTable(srNo, 1, 1, 1, 1);
            break;
        case 6:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "transparent";
            //FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B_bar = '#FFA500';
            colorQBbarline  = '#FFA500';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C_bar = '#FFA500';
            colorQCbarline = '#FFA500';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            appendTable(srNo, 1, 0, 1, 1);
            break;
        case 5:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A_bar = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#FFA500';
            QA.style.backgroundColor = "#FFFF00";
            //FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B_bar = '#1e1e1e';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C_bar = '#FFA500';
            colorQCbarline = '#FFA500';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            appendTable(srNo, 1, 1, 0, 1);
            break;
        case 4:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "transparent";
            //FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B_bar = '#1e1e1e';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C_bar = '#FFA500';
            colorQCbarline = '#FFA500';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFFF00";
            appendTable(srNo, 1, 0, 0, 1);
            break;
        case 3:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A_bar = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#FFA500';
            QA.style.backgroundColor = "#FFFF00";
            //FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B_bar = '#FFA500';
            colorQBbarline  = '#FFA500';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C_bar = '#1e1e1e';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            appendTable(srNo, 1, 1, 1, 0);
            break;
        case 2:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "transparent";
            //FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B_bar = '#FFA500';
            colorQBbarline  = '#FFA500';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C_bar = '#1e1e1e';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            appendTable(srNo, 1, 0, 1, 0);
            break;
        case 1:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A_bar = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#FFA500';
            QA.style.backgroundColor = "#FFFF00";
            //FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B_bar = '#1e1e1e';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C_bar = '#1e1e1e';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            appendTable(srNo, 1, 1, 0, 0);
            break;
        case 0:
            colorclkA = '#1e1e1e';
            colorQAline = '#FFA500';
            colorclkB = '#1e1e1e';
            colorQAbarline = '#1e1e1e';
            colorAND_Q_A_bar = '#1e1e1e';
            QA.style.backgroundColor = "transparent";
            //FF-1-Over
            colorQBline = '#FFA500';
            colorAND_Q_B_bar = '#1e1e1e';
            colorQBbarline  = '#1e1e1e';
            colorclkC = '#1e1e1e';
            QB.style.backgroundColor = "transparent";
            //FF-2 Over
            colorQCline = '#FFA500';
            colorAND_Q_C_bar = '#1e1e1e';
            colorQCbarline = '#1e1e1e';
            coloroutputC = '#1e1e1e';
            QC.style.backgroundColor = "transparent";
            appendTable(srNo, 1, 0, 0, 0);
            break;
        default:
            colorclkA = '#FFA500';
            colorQAline = '#1e1e1e';
            colorAND_Q_A_bar = '#FFA500';
            colorclkB = '#FFA500';
            colorQAbarline = '#FFA500';
            QA.style.backgroundColor = "#FFFF00";
            //FF-1-Over
            colorQBline = '#1e1e1e';
            colorAND_Q_B_bar = '#FFA500';
            colorQBbarline  = '#FFA500';
            colorclkC = '#FFA500';
            QB.style.backgroundColor = "#FFFF00";
            //FF-2 Over
            colorQCline = '#1e1e1e';
            colorAND_Q_C_bar = '#FFA500';
            colorQCbarline = '#FFA500';
            coloroutputC = '#FFA500';
            QC.style.backgroundColor = "#FFF00";

    }
    console.log(counter);
    
    backgroundUpdate();
}


const tbody = document.getElementsByTagName('tbody')[0];
const resetBtn = document.getElementById('reset');
let srNo = -1;

function reset(){
    tbody.innerHTML = ``;
    srNo = -1;

}

function appendTable(srNo, mode, qA, qB, qC){
    let modeDesc = "";
    if(mode==0){
        modeDesc = "(DOWN)";
    }
    else{
        modeDesc = "(UP)";
    }
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th scope="row">${srNo}</th>
        <td>${mode} ${modeDesc}</td>
        <td>${qA}</td>
        <td>${qB}</td>
        <td>${qC}</td>
    `;
    tbody.appendChild(newRow);
}