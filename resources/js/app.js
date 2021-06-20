function runConversion(){
    var userInput = document.getElementById('userInput').value;
var convRange = document.getElementById('convRange').selectedIndex;
var result = document.getElementById("result");
var convRangeVal = document.getElementsByTagName("option")[convRange].value;
var answer;
    if(convRangeVal === "inchCm"){
        answer = (userInput * 2.54) + " Centimetres"; //Convert inches to centimetre
    }else if(convRangeVal === "cmInch"){
        answer = (userInput / 2.54) +" Inches"; //Convert centimetres to inches
    }else if(convRangeVal === "inchFeet"){
        answer = (userInput / 12) + " Feet"; //Convert inches to feet
    }else if(convRangeVal === "feetInch"){
        answer = (userInput * 12) + " Inches"; //Convert feet to inches
    }else if(convRangeVal === "inchMetre"){
        answer = (userInput / 39.37) + " Metres"; //Convert inches to metre
    }else if(convRangeVal === "inchMetre"){
        answer = (userInput * 39.37) + " Inches"; //Convert metres to inches
    }else if(convRangeVal === "inchMiles"){
        answer = (userInput / 63360) + " Miles"; //Convert inches to miles
    }else if(convRangeVal === "milesInch"){
        answer = (userInput * 63360) + " Inches"; //Convert miles to inches
    }else if(convRangeVal === "cmFeet"){
        answer = (userInput / 30.48) + " Feet"; //Convert centimetre to feet
    }else if(convRangeVal === "feetCm"){
        answer = (userInput * 30.48) + " Centimetres"; //Convert feet to centimetre
    }else if(convRangeVal === "cmMetre"){
        answer = (userInput * 30.48) + " Metres"; //Convert centimetre to metres
    }else if(convRangeVal === "metreCm"){
        answer = (userInput * 30.48) + " Centimetres"; //Convert metres to centimetre
    }else if(convRangeVal === "cmMiles"){
        answer = (userInput / 160934) + " miles"; //Convert centimetres to miles
    }else if(convRangeVal === "milesCm"){
        answer = (userInput * 160934) + " Centimetres"; //Convert miles to centimetres
    }else if(convRangeVal === "milesKm"){
        answer = (userInput * 1.609) + " Kilometres"; //Convert miles to kilometres
    }else if(convRangeVal === "kmMiles"){
        answer = (userInput * 1.609) + " Miles";//Convert kilometres to miles
    }else if(convRangeVal ==="feetMetre"){
        answer = (userInput /  3.28084) + " Metres"; //Convert feet to metres
    }else if(convRangeVal === "metreFeet"){
        answer = (userInput *  3.28084) + " Feet"; //Convert metre to feet
    }else if(convRangeVal === "feetMiles"){
        answer = (userInput / 5280) + " Miles"; //Convert feet to miles
    }else if(convRangeVal === "milesFeet"){
        answer = (userInput * 5280) + " Feet"; //Convert miles to feet
    }else if(convRangeVal === "poundsKg"){
        answer = (userInput /  2.20462) + " Kilograms"; //Convert pounds to kilogram
    }else if(convRangeVal === "kgPounds"){
        answer = (userInput *  2.20462) + " Pounds";//Convert kilogram to pounds
    }else if(convRangeVal === "cF"){
        answer = ((userInput * (9/5)) + 32) + " Fahrenheit"; //Convert degree celcius to degree fahrenheit
    }else if(convRangeVal === "fC"){
        answer = ((userInput - 32) * (5/9)) + " Celcius"; //Convert degree fahrenheit to degree celcius
    }else{
        answer = 0;
    }

    console.log(answer);
    result.innerHTML = answer;
}

document.getElementById('runCalc').addEventListener("click", runConversion);
// document.getElementById('userInput').addEventListener("change", runConversion);
// document.getElementById('convRange').addEventListener("change", runConversion);
