let value_1 = document.getElementById("A")
let value_2 = document.getElementById("B")
let count_1 = 0
let count_2 = 0
let result_sum = document.getElementById("Sum")
let result_carry = document.getElementById("Carry")


function changeValue_1(){
    count_1 += 1
    if (count_1%2==0)
    {
        value_1.textContent = 0
    }
    else{
        value_1.textContent = 1
    }

    }

function changeValue_2(){
    count_2 += 1
    if (count_2%2==0)
    {
        value_2.textContent = 0
    }
    else{
        value_2.textContent = 1
    }

}

function half(){
    if ( count_1%2== 0 && count_2%2 == 0){
        result_sum.textContent = 0
        result_carry.textContent = 0
    }
    else if (count_1%2 == 1 && count_2%2 == 1){
        result_carry.textContent = 1
        result_sum.textContent = 0
    }
    else if (count_1%2 == 1 && count_2%2 == 0){
        result_carry.textContent = 0
        result_sum.textContent = 1
    }
    else if (count_1%2 == 0 && count_2%2 == 1){
        result_carry.textContent = 0
        result_sum.textContent = 1
    }
    else{

    }
}
