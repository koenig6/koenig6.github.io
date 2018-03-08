var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','https://api.wunderground.com/api/968f45ebbdd693ec/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

    document.getElementsById('high').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('speed').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById("w_icon").scr = weatherInfo.current_observation.icon_url;
    document.getElementById('forecast').innerHTML = weatherInfo.current_observation.forecast_url;



}
