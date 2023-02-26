var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

//Creating New Pattern:
function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);  
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

//Check Which Button is Pressed:   
$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);
});

//Adding Sounds to button Clicks:
function playSound(name){
    var audio = "sounds/" + randomChosenColor + ".mp3";
    audio.play();
}

//Adding Animations to User Clicks:
function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

//Starting the Game:
var started = false;
var level = 0;

$(document).keypress(function(){
    if(!started){

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Checking User's Answers Against Game Sequence:
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function (){
                nextSequence();
            }, 1000);
        }
    }
    else{
        console.log("Wrong");

        playSound("wrong");

        $("body").addClass("game-Over");

        setTimeout(function(){
        $("body").removeClass("game-over");},200); 
      
        $("h#level-title").text("Game Over, Press Any Key to Restart");

        startOver();
    }
}

//Start-Over:
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




 

    

