function runConversion(){
    var userInput = document.getElementById('userInput').value;
var convRange = document.getElementById('convRange').selectedIndex;
var result = document.getElementById("result");
var convRangeVal = document.getElementsByTagName("option")[convRange].value;
var answer;
    if(convRangeVal === "inchCm"){
        answer = (userInput * 2.54) + " Centimeters";
    }else if(convRangeVal === "cmInch"){
        answer = (userInput / 2.54) +" Inches";
    }else if(convRangeVal === "inchFeet"){
        answer = (userInput / 12) + " " + " Feet";
    }else if(convRangeVal === "feetInch"){
        answer = (userInput * 12) + " " + " Inches";
    }else{
        answer = 0;
    }
    console.log(answer);
    result.innerHTML = answer;
}

document.getElementById('runCalc').addEventListener("click", runConversion);
