function validation(){
    let phone = document.getElementById("num").value;

    let numLength = phone.length;
    let firstNums = phone.substr(0, 2);
    let lastNums = phone.substr(numLength-9, 9);
    let num;

    if(numLength < 9){
        alert("Numbers missing please check again......"); 
        document.getElementById("msg").innerHTML = "invalid number";
    }else if(numLength== 9){
        alert("Number validation is successfull!");
        num = "94" + phone;
        document.getElementById("msg").innerHTML = num;
        
    }else if(numLength == 10){
        num = "94"+ lastNums;
        document.getElementById("msg").innerHTML = num;
    }else if(numLength> 11){
        alert("Numbers missing please check again......");
        document.getElementById("msg").innerHTML = "invalid number";
    }else if(numLength == 11 && firstNums != 94){
        alert("Numbers missing please check again......"); 
        document.getElementById("msg").innerHTML = "invalid number";
    }else if(numLength == 11 && firstNums == 94){
        num = phone;
        alert("Number validation is successfull!");
        document.getElementById("msg").innerHTML = num;
    }
}