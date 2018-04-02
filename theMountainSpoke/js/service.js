//reference parts of HTML in variables
var tuneUps = document.querySelector('div.tune-Ups');
var brakes = document.querySelector('div.brakes');
var drivetrain = document.querySelector('div.drivetrain');
var shifter = document.querySelector('div.shifter');
var wheels = document.querySelector('div.wheels');
var handlebars = document.querySelector('div.handlebars');
var installs = document.querySelector('div.installs');


//JSON url stored into variable
var requestURL = 'koenig6.github.io';

//create and open request
var request = new XMLHttpRequest();
request.open('GET', requestURL);

//get response and convert from JSON to Javascript
request.responseType = 'json';
request.send();

//waiting for response and dealing with it when it arrives
request.onload = function () {
    var serviceInfo = request.response;
    displayService(serviceInfo);
}


//create service information sections
function displayService(jsonObj) {
    var serve = jsonObj['services'];

    for (var i = 0; i < service.length; i++) {
        var myTable = document.createElement('table');
        var myThead = document.createElement('thead');
        var myTheadTr = document.createElement('tr');
        var myTheadTh = document.createElement('th');
        var myTbody = document.createElement('tbody');
        var myTbodyTr1 = document.createElement('tr');
        var myTbodyTh1a = document.createElement('th');
        var myTbodyTh1b = document.createElement('th');
        var myTbodyTr2 = document.createElement('tr');
        var myTbodyTh2a = document.createElement('th');
        var myTbodyTh2b = document.createElement('th');
        var myTbodyTr3 = document.createElement('tr');
        var myTbodyTh3a = document.createElement('th');
        var myTbodyTh3b = document.createElement('th');
        var myTbodyTr4 = document.createElement('tr');
        var myTbodyTh4a = document.createElement('th');
        var myTbodyTh4b = document.createElement('th');
        var myTbodyTr5 = document.createElement('tr');
        var myTbodyTh5a = document.createElement('th');
        var myTbodyTh5b = document.createElement('th');


        myTheadTr.textContent = serve[i].name;
        myTbodyTh1a.textContent = serve[i].type1;
        myTbodyTh1b.textContent = serve[i].price1;
        myTbodyTh2a.textContent = serve[i].type2;
        myTbodyTh2b.textContent = serve[i].price2;
        myTbodyTh3a.textContent = serve[i].type3;
        myTbodyTh3a.textContent = serve[i].price3;
        myTbodyTh4a.textContent = serve[i].type4;
        myTbodyTh4b.textContent = serve[i].price4;
        myTbodyTh5a.textContent = serve[i].type5;
        myTbodyTh5b.textContent = serve[i].price5;



        myTable.appendChild(myTheadTr);
        myTable.appendChild(myTbodyTh1a);
        myTable.appendChild(myTbodyTh1b);
        myTable.appendChild(myTbodyTh2a);
        myTable.appendChild(myTbodyTh2b);
        myTalbe.appendChild(myTbodyTh3a);
        myTable.appendChild(myTbodyTh3a);
        myTable.appendChild(myTbodyTh4a);
        myTable.appendChild(myTbodyTh4b);
        myTable.appendChild(myTbodyTh5a);
        myTable.appendChild(myTbodyTh5b);
        if (serve[i].name == "Tune-Ups") {
            tuneUps.appendChild(myTable);
        } else if (serve[i].name == "Brakes") {
            brakes.appendChild(myTable);
        } else if (serve[i].name == "Drivetrain") {
            drivetrain.appendChild(myTable);
        } else if (serve[i].name == "Shifter") {
            shifter.appendChild(myTable);
        } else if (serve[i].name == "Wheels") {
            wheels.appendChild(myTable);
        } else if (serve[i].name == "Handlebars") {
            handlebars.appendChild(myTable);
        } else if (serve[i].name == "Installs") {
            installs.appendChild(myArticle);
        }
    }
}
