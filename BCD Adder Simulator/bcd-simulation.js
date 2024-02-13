"use strict"

// Defining the constants as global variables
const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const carry = document.getElementById('carry');
const outputContainer = document.querySelector('.output-container');

// Initial assumption is that the inputs are 0
let input1 = '0000';
let input2 = '0000';

//Please First refer to the calculateBCD() function


function updateInput1(){
    if (a0.checked){
        input1 = input1.substring(0,3) + "1";
    }
    else{
        input1 = input1.substring(0,3) + "0";
    }

    if (a1.checked){
        input1 = input1.substring(0,2) + "1" + input1.substring(3);
    }
    else{
        input1 = input1.substring(0,2) + "0" + input1.substring(3);
    }

    if (a2.checked){
        input1 = input1.substring(0,1) + "1" + input1.substring(2);
    }
    else{
        input1 = input1.substring(0,1) + "0" + input1.substring(2);
    }

    if (a3.checked){
        input1 = "1" + input1.substring(1);
    }
    else{
        input1 = "0" + input1.substring(1);
    }
}

function updateInput2(){
    if (b0.checked){
        input2 = input2.substring(0,3) + "1";
    }
    else{
        input2 = input2.substring(0,3) + "0";
    }

    if (b1.checked){
        input2 = input2.substring(0,2) + "1" + input2.substring(3);
    }
    else{
        input2 = input2.substring(0,2) + "0" + input2.substring(3);
    }

    if (b2.checked){
        input2 = input2.substring(0,1) + "1" + input2.substring(2);
    }
    else{
        input2 = input2.substring(0,1) + "0" + input2.substring(2);
    }

    if (b3.checked){
        input2 = "1" + input2.substring(1);
    }
    else{
        input2 = "0" + input2.substring(1);
    }
}

function invalidBCD(){
    s0.style.backgroundColor = "red";
    s1.style.backgroundColor = "red";
    s2.style.backgroundColor = "red";
    s3.style.backgroundColor = "red";
    carry.style.backgroundColor = "red";
}

function validBCDInput(){
    s0.style.backgroundColor = "#F7F7F7";
    s1.style.backgroundColor = "#F7F7F7";
    s2.style.backgroundColor = "#F7F7F7";
    s3.style.backgroundColor = "#F7F7F7";
    carry.style.backgroundColor = "#F7F7F7";
}

function displayOutput(lastDigit){
    let len = lastDigit.length;
    if(lastDigit[len-1]=='1'){
        s0.style.backgroundColor = "#00ff00";
    }
    else{
        s0.style.backgroundColor = "#F7F7F7";
    }

    if(lastDigit[len-2]=='1'){
        s1.style.backgroundColor = "#00ff00";
    }
    else{
        s1.style.backgroundColor = "#F7F7F7";
    }

    if(lastDigit[len-3]=='1'){
        s2.style.backgroundColor = "#00ff00";
    }
    else{
        s2.style.backgroundColor = "#F7F7F7";
    }

    if(lastDigit[len-4]=='1'){
        s3.style.backgroundColor = "#00ff00";
    }
    else{
        s3.style.backgroundColor = "#F7F7F7";
    }
}

function calculateBCD(){
    
    // Getting the inputs A3A2A1A0 depending on the inputs of user from radio button
    updateInput1();

    console.log(input1)

    // Getting the inputs B3B2B1B0 depending on the inputs of user from radio button

    updateInput2();
    console.log(input2);


    //Convert the binary string to a decimal number
    let decimalInput1 = parseInt(input1,2);
    let decimalInput2 = parseInt(input2,2);
    console.log(decimalInput1);
    console.log(decimalInput2);

    //If any one of the inputs has sum greater than 9 then invalid BCD
    if(decimalInput1>9 || decimalInput2>9){
        invalidBCD(); //Change the colors of outputs to red
        
        outputContainer.innerHTML += `
        <div class="child">
            <div class="inputA">${input1}(${decimalInput1})</div>
            <div class="inputB">${input2}(${decimalInput2})</div>
            <div class="sum">Invalid BCD Number</div>
        </div> 
        `
        
        return;
    }
    else{
        validBCDInput(); //Change the colors of outputs to default (To clear previous result)
        
        //Calculate the sum of inputs
        let sum = decimalInput1 + decimalInput2; 
        let carryNum = 0;
        
        //If sum>9 then carry is generated.
        if(sum>9){
            carry.style.backgroundColor = "#00ff00";
            carryNum = 1;
        }
        else{
            carry.style.backgroundColor = "#F7F7F7";
            carryNum = 0;
        }

        //Getting the last digit of the decimal sum to update S3S2S1S0 output
        let lastDigit = sum%10;

        //Convert the last decimal digit into binary number
        let outputStr = lastDigit.toString(2);

        //Display the output according to the BCD Sum
        displayOutput(outputStr);

        outputContainer.innerHTML += `
        <div class="child">
            <div class="inputA">${input1}(${decimalInput1})</div>
            <div class="inputB">${input2}(${decimalInput2})</div>
            <div class="sum">${carryNum} ${outputStr} (${sum})</div>
        </div> 
        `

        


        console.log(sum);
        console.log(sum.toString(2));

    }


}

