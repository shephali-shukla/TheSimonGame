var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

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

//Check Which Button is Pressed:   
$(".btn").click(function(){
    
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    //console.log(userClickedPattern);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
});

// Checking User's Answers Against Game Sequence:
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        //console.log("Success");
        if(userClickedPattern.length === gamePattern.length){

            setTimeout(function (){
                nextSequence();
            }, 1000);
        }
    }
    else{
        //console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
        $("body").removeClass("game-over");},200); 
      
        startOver();
    }
}

//Creating New Pattern:
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);  
    
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
}

//Adding Animations to User Clicks:
function animatePress(currentColor){

    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

//Adding Sounds to button Clicks:
function playSound(_name){
    var audio = new Audio("sounds/" + _name + ".mp3");
    audio.play();
}

//Start-Over:
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




















 

    

