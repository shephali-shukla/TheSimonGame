buttonColours = ["red", "blue", "green", "yellow"];

var num = nextSequence();

var randomChosenColor = buttonColours[num];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}
