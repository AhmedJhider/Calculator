// let button1 = document.querySelector(".button1");
// let button2 = document.querySelector(".button2");
// let button3 = document.querySelector(".button3");
// let button4 = document.querySelector(".button4");
// let button5 = document.querySelector(".button5");
// let button6 = document.querySelector(".button6");
// let button7 = document.querySelector(".button7");
// let button8 = document.querySelector(".button8");
// let button9 = document.querySelector(".button9");
// let button10 = document.querySelector(".button10");
// let button11 = document.querySelector(".button11");
// let button12 = document.querySelector(".button12");
// let button13 = document.querySelector(".button13");
// let button14 = document.querySelector(".button14");
// let button15 = document.querySelector(".button15");
// let button16 = document.querySelector(".button16");
// let button17 = document.querySelector(".button17");
// let button18 = document.querySelector(".button18");
// let button19 = document.querySelector(".button19");
// let button20 = document.querySelector(".button20");

let button1 = "(";
let button2 = ")";
let button3 = "Ans";
let button4 = "Del";
let button5 = "7";
let button6 = "8";
let button7 = "9";
let button8 = "÷";
let button9 = "4";
let button10 = "5";
let button11 = "6";
let button12 = "*";
let button13 = "1";
let button14 = "2";
let button15 = "3";
let button16 = "-";
let button17 = "0";
let button18 = ".";
let button19 = "=";
let button20 = "+";

let som = document.querySelector(".outputp2");
let som1 = document.querySelector(".outputp1");
function number(val){
    if(som.innerHTML.length == 34){

    }

    else if(som.innerHTML.substring(0,1)== "O"){
        som.innerHTML = "";
        som.innerHTML = som.innerHTML + val;
    }else{
        som.innerHTML = som.innerHTML + val;
    }
}

function operat(vall){ 
    if(["÷","*","-","+","."].includes(som.innerHTML.substring(som.innerHTML.length-1, som.innerHTML.length)) == true){
        som.innerHTML = som.innerHTML.substring(0, som.innerHTML.length-1) + vall;
    }else{
        som.innerHTML = som.innerHTML + vall;
    }
}
function openingbrak(valll){
    if(["÷","*","-","+",""].includes(som.innerHTML.substring(som.innerHTML.length-1, som.innerHTML.length)) == true){
        som.innerHTML = som.innerHTML + valll;
    }else if(["O"].includes(som.innerHTML.substring(som.innerHTML.length-1, som.innerHTML.length)) == true){
        som.innerHTML = som.innerHTML.substring(0, som.innerHTML.length-1) + valll;
    }
    else{

    }
 
}

function closingbrak(vallll){
    if(isNaN(som.innerHTML.substring(som.innerHTML.length-1, som.innerHTML.length)) == false){
        som.innerHTML = som.innerHTML + vallll;
    }
    else{

    }
}
console.log(som.innerHTML.length)
let part1 = "";
let part2 = "";
let d = 0;
let f = 0;
let add = 0;
let ans = 0;


function del(){
    if(som.innerHTML.length > 0){
        som.innerHTML = som.innerHTML.substring(0, som.innerHTML.length -1);
    }
}

function answer(){
    som.innerHTML = eval(som.innerHTML)
}

