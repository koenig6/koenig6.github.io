
//reference parts of HTML in variables
var franklin = document.querySelector('div.franklin');
var greenville = document.querySelector('div.greenville');
var springfield = document.querySelector('div.springfield');

//JSON url stored into variable
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//create and open request
var request = new XMLHttpRequest();
request.open('GET', requestURL);

//get response and convert from JSON to Javascript
request.responseType = 'json';
request.send();

//waiting for response and dealing with it when it arrives
request.onload = function () {
    var cityInfo = request.response;
    displayCity(cityInfo);
}


//create city information sections
function displayCity(jsonObj) {
    var city = jsonObj['towns'];

    for (var i = 0; i < city.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = city[i].name;
        myPara1.textContent = 'Motto: ' + city[i].motto;
        myPara2.textContent = 'Year Founded: ' + city[i].yearFounded;
        myPara3.textContent = 'Current Population: ' + city[i].currentPopulation;
        myPara4.textContent = 'Average Rainfall: ' + city[i].averageRainfall;
        myPara5.textContent = 'Events:';

        var events = city[i].events;
        for (var j = 0; j < events.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = events[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);
        if (city[i].name == "Franklin") {
            franklin.appendChild(myArticle);
        } else if (city[i].name == "Greenville") {
            greenville.appendChild(myArticle);
        } else if (city[i].name == "Springfield") {
            springfield.appendChild(myArticle);
        }
    }
}
