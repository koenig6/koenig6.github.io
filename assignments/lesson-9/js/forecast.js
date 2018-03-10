
var wObject = new XMLHttpRequest();

wObject.open('GET','http://api.wunderground.com/api/968f45ebbdd693ec/forecast/q/MN/Franklin.json', true );

wObject.send();

wObject.onload = function () {

    var wInfo = JSON.parse(wObject.responseText)
    console.log(wInfo);

    document.getElementById('forecast').innerHTML = wInfo.forecast.txt_forecast;


}
