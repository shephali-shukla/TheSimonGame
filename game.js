var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];


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




 

    

