let flag = false;

const QA = document.getElementById("QA");
const QB = document.getElementById("QB");
const QC = document.getElementById("QC");
const QD = document.getElementById("QD");
const clkbtn = document.getElementsByClassName("clk")[0];
const vcc = document.getElementsByClassName("vcc")[0];

let counter = -1;

function start() {
    if (flag == true) {
        flag = false;
        vcc.style.backgroundColor = "transparent";
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        QD.style.backgroundColor = "transparent";
        clkbtn.setAttribute("disabled", "");
        counter = 0;
        return;
    } else {
        //START
        flag = true;
        vcc.style.backgroundColor = "lime";
        clkbtn.removeAttribute("disabled");
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        QD.style.backgroundColor = "transparent";
        counter = 0;
    }
}

function incCount() {
    counter = (counter + 1) % 10; // Increment counter and reset to 0 when it reaches 10

    switch (counter) {
        case 9:
            QA.style.backgroundColor = "lime";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "transparent";
            QD.style.backgroundColor = "lime";
            break;
        
        case 8:
            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "transparent";
            QC.style.backgroundColor = "transparent";
            QD.style.backgroundColor = "lime";
            break;

        case 7:
            QA.style.backgroundColor = "lime";
            QB.style.backgroundColor = "lime";
            QC.style.backgroundColor = "lime";
            QD.style.backgroundColor = "transparent";
            break;

        case 6:
            QA.style.backgroundColor = "transparent";
            QB.style.backgroundColor = "lime";
            QC.style.backgroundColor = "lime";
            QD.style.backgroundColor = "transparent";
            break;

        case 5:
        QA.style.backgroundColor = "lime";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "lime";
        QD.style.backgroundColor = "transparent";
        break;

        case 4:
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "lime";
        QD.style.backgroundColor = "transparent";
        break;

        case 3:
        QA.style.backgroundColor = "lime";
        QB.style.backgroundColor = "lime";
        QC.style.backgroundColor = "transparent";
        QD.style.backgroundColor = "transparent";
        break;

        case 2:
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "lime";
        QC.style.backgroundColor = "transparent";
        QD.style.backgroundColor = "transparent";
        break;

        case 1:
        QA.style.backgroundColor = "lime";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        QD.style.backgroundColor = "transparent";
        break;

        case 0:
        QA.style.backgroundColor = "transparent";
        QB.style.backgroundColor = "transparent";
        QC.style.backgroundColor = "transparent";
        QD.style.backgroundColor = "transparent";
        break;
        default:
    }
}