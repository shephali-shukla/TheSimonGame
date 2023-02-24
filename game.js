var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];

    gamePattern.push(randomChosenColor);
}

$("#randomChosenColor").click(function(){

    var colorSound = "sounds/" + randomChosenColor + ".mp3";
    var audio = new Audio(colorSound);
    $(this).fadeOut(100).fadeIn(100).audio.play();

});
