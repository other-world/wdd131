const temp=21;
const wind=10;
const conditions = "Sunny";

function calculateWindChill(Temp, Velocity) {
    return 35.74 + (0.6215*Temp) - (35.75*(Math.pow(Velocity, 0.16))) + (0.4275*Temp)*(Math.pow(Velocity, 0.16));
}

document.getElementById("temp").innerHTML = temp + "&deg;C";
document.getElementById("conditions").innerHTML = conditions;
document.getElementById("windspeed").innerHTML = wind + " km/h";
document.getElementById("windchill").innerHTML = "N/A";

let windchill = "N/A";
document.getElementById("windchill").innerHTML = windchill;
if (temp >= 10 && wind > 3) {
    windchill = calculateWindChill(temp, wind);
    //console.log(windchill);
    document.getElementById("windchill").innerHTML = String(windchill.toFixed(2)) + "&deg;C";
} else {
    windchill = "N/A";
    //console.log("N/A");
    document.getElementById("windchill").innerHTML = windchill;
}
