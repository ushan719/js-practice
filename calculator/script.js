function fn0(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 0;
}
function fn1(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 1;
}
function fn2(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 2;
}
function fn3(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 3;
}
function fn4(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 4;
}
function fn5(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 5;
}

function fn6(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 6;
}

function fn7(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 7;
}

function fn8(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 8;
}

function fn9(){
    let previous = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = previous + 9;
}

function feraser(){
    let previous = document.getElementById("display").innerHTML;
    let erasedPre = previous.slice(0, -1); 
    document.getElementById("display").innerHTML = erasedPre;
}


let op;
let firstSave;

function fnAD(){

     firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = "AD"; 
     
}

function fnMN(){
     firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
     op = "MN";
    
}

function fnML(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = "ML";

}

function fnDV(){
    firstSave = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = 0;
    op = "DV";

}

function fnEQ(){
    let secondSave = document.getElementById("display").innerHTML;
    if(op == "AD"){
        document.getElementById("display").innerHTML = parseInt(firstSave)+ parseInt(secondSave);
    }
    else if(op == "ML"){
        
        document.getElementById("display").innerHTML = parseInt(firstSave)* parseInt(secondSave);
    }else if(op == "MN"){
        
        document.getElementById("display").innerHTML = parseInt(firstSave)- parseInt(secondSave);
    }else if(op == "DV"){
        
        document.getElementById("display").innerHTML = parseInt(firstSave)/ parseInt(secondSave);
    }else{
        document.getElementById("display").innerHTML= "invalid";
    }
}

function fnAC(){

    document.getElementById("display").innerHTML= null;
    op = null;
    firstSave= null;
    secondSave= null;

}