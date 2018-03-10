var weObject = new XMLHttpRequest();

weObject.open('GET','https://api.wunderground.com/api/968f45ebbdd693ec/conditions/q/MN/Franklin.json', true );

weObject.send();

weObject.onload = function () {

    var weInfo = JSON.parse(weObject.responseText)
    console.log(weInfo);

    document.getElementById('high').innerHTML = weInfo.current_observation.temp_f;
    document.getElementById('wet').innerHTML = weInfo.current_observation.weather;

}
