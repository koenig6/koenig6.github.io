var wetObject = new XMLHttpRequest();

wetObject.open('GET','https://api.wunderground.com/api/968f45ebbdd693ec/conditions/q/MN/Franklin.json', true );

wetObject.send();

wetObject.onload = function () {

    var wetInfo = JSON.parse(wetObject.responseText)
    console.log(wetInfo);


    document.getElementById('high').innerHTML = wetInfo.current_observation.temp_f;
    document.getElementById('wet').innerHTML = wetInfo.current_observation.weather;


}


