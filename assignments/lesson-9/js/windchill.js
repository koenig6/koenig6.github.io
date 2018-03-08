var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/968f45ebbdd693ec/conditions/q/MN/Franklin.json', true );

weatherObject.send();

weatherObject.onload = function () {

    var weatherInfo = JSON.parse(weatherObject.responseText)
    console.log(weatherInfo);

    document.getElementsById('windy').innerHTML = weatherInfo.current_observation.windchill_f;


}
