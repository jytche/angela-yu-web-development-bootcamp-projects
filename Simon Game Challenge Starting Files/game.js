var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var hasGameStarted = false;

var level = 0;

$(document).keypress(function(event) {
    
    if (!hasGameStarted) {
        nextSequence();
        $("h1").text("Level " + level);
    }

    hasGameStarted = true;
})

function playSound(name) {
    
    var audio = new Audio('./sounds/'+ name + ".mp3")

    audio.play();
};

$(".btn").click(function(event) {

    var userChosenColour = event.target.id;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length);

});

function nextSequence() {

    userClickedPattern = [];

    level++;

    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

};

function animatePress(currentColour) {
    $("." + currentColour).addClass("pressed");

    setTimeout(function () {
        $("." + currentColour).removeClass("pressed"); 
    }, 100);
};

function checkAnswer(currentLevel) {

    if (userClickedPattern[userClickedPattern.length - 1] === gamePattern[currentLevel - 1]) {

        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        };
        
    } else {
        
        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game Over, press any key to restart");

        startOver();
    };
};

function startOver() {
    level = 0;
    hasGameStarted = false;
    gamePattern = [];
}
