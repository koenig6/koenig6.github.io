var weObject = new XMLHttpRequest();

weObject.open('GET','http://api.wunderground.com/api/968f45ebbdd693ec/conditions/q/MN/Franklin.json', true );

weObject.send();

weObject.onload = function () {

    var weInfo = JSON.parse(weObject.responseText)
    console.log(weInfo);

    document.getElementById('speed').innerHTML = weInfo.current_observation.wind_mph;
    document.getElementById('w_icon').src = weInfo.current_observation.icon_url;


}
