

$(document).keypress(function(event) {
    
    var eventKey = event.key;
    
    $("h1").text(eventKey);
})