function tired() {
    // Get numbers

    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();


    var current = now.getday + now.getDate + now.getMonth;


    //Display message
    document.getElementById('currentdate').innerHTML = current;
