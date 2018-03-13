
//make a container for my town data
var section = document.querySelector('#home_two');

// requesting town data
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var towndata = request.response;
    var towns = towndata['towns'];

    for (var i = 0; i < towns.length; i++)
    {
        if (i == 2)
        {
            i++;
        }
        var myArticle = document.createElement('article');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPara5 = document.createElement('p');
        var myList = document.createElement('ul');
        var myImg = document.createElement('img');

        myH3.textContent = towns[i].name;
        myPara1.textContent = 'Motto: ' + towns[i].motto;
        myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
        myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
        myPara4.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' inches';
        myPara5.textContent = 'Events:';
        myImg.setAttribute('src', '/images/' + towns[i].name + '.jpg');
        myImg.setAttribute('alt',towns[i] + 'city picture');

        var townEvents = towns[i].events;
        for (var j = 0; j < townEvents.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        myArticle.appendChild(myList);
        myArticle.appendChild(myImg);

        section.appendChild(myArticle);
    }
}






