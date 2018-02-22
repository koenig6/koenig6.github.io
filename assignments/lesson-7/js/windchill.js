
    var high = parseFloat(document.getElementById('high').innerHTML);
    var low = parseFloat(document.getElementById('low').innerHTML);
    var speed = parseFloat(document.getElementById('speed').innerHTML);

    var tempAve = (high + low) / 2;

    var factor = 35.75 + (0.6215 * tempAve) - (35.75 * (Math.pow(speed, 0.16))) + (0.4275 * tempAve * (Math.pow(speed, 0.16)));

document.getElementById('windy').innerHTML = factor.toFixed(1) + " F";

