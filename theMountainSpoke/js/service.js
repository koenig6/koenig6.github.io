var section = document.querySelector('#serviceSummary')

var requestURL = 'https://koenig6.github.io/theMountainSpoke/data.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);

//get response and convert from JSON to Javascript
request.responseType = 'json';
request.send();

//waiting for response and dealing with it when it arrives
request.onload = function () {
    var servicedata = request.response;
    var services = servicedata['services'];

    for (var i = 0; i < services.length; i++)
    {
        var myTable = document.createElement('table');
        var myThead = document.createElement('thead');
        var myTheadTr = document.createElement('tr');
        var myTheadTh = document.createElement('th');
        var myTheadTh2 = document.createElement('th');
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


        myThead.textContent;
        myTheadTr.textContent;
        myTheadTh.textContent = services[i].name;
        myTheadTh2.textContet = services[i].catagory;
        myTbody.textContent;
        myTbodyTr1.textContent;
        myTbodyTh1a.textContent = services[i].type1;
        myTbodyTh1b.textContent = services[i].price1;
        myTbodyTr2.textContent;
        myTbodyTh2a.textContent = services[i].type2;
        myTbodyTh2b.textContent = services[i].price2;
        myTbodyTr3.textContent;
        myTbodyTh3a.textContent = services[i].type3;
        myTbodyTh3b.textContent = services[i].price3;
        myTbodyTr4.textContent;
        myTbodyTh4a.textContent = services[i].type4;
        myTbodyTh4b.textContent = services[i].price4;
        myTbodyTr5.textContent;
        myTbodyTh5a.textContent = services[i].type5;
        myTbodyTh5b.textContent = services[i].price5;


        myTable.appendChild(myThead);
        myThead.appendChild(myTheadTr);
        myTheadTr.appendChild(myTheadTh);
        myTheadTr.appendChild(myTheadTh2);

        myTable.appendChild(myTbody);
        myTbody.appendChild(myTbodyTr1);
        myTbodyTr1.appendChild(myTbodyTh1a);
        myTbodyTr1.appendChild(myTbodyTh1b);

        myTable.appendChild(myTbody);
        myTbody.appendChild(myTbodyTr2);
        myTbodyTr2.appendChild(myTbodyTh2a);
        myTbodyTr2.appendChild(myTbodyTh2b);

        myTable.appendChild(myTbody);
        myTbody.appendChild(myTbodyTr3);
        myTbodyTr3.appendChild(myTbodyTh3a);
        myTbodyTr3.appendChild(myTbodyTh3b);

        myTable.appendChild(myTbody);
        myTbody.appendChild(myTbodyTr2);
        myTbodyTr4.appendChild(myTbodyTh4a);
        myTbodyTr4.appendChild(myTbodyTh4b);

        myTable.appendChild(myTbody);
        myTbody.appendChild(myTbodyTr5);
        myTbodyTr5.appendChild(myTbodyTh5a);
        myTbodyTr5.appendChild(myTbodyTh5b);



        section.appendChild(myTable);
    }
}





