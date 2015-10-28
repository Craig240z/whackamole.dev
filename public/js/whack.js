'use strict';

// declare global variables
// create event listeners
// propose game functions
// create game functions
var iconArray = [];
var randomSquare = [];
// var data-tile = 
var i = 0;

$('.start').click(function(event) {
    iconArray = [];
    getRandomSquare();
    startGame();
})
$('.tile').click(function(event) {
    $(this).toggleClass('active');
    var buttonClicked = $(this).attr("data-tile");
    console.log("you clicked number " + buttonClicked);
});
$('.reset').click(function(event) {
});

function startGame() {
    var i = 0;
    var intervalId = setInterval(function() {
        // animateRandomIcon(iconArray[i]);
        i += 1;
        if(i >= iconArray.length) {
            clearInterval(intervalId);
        }
    }, 300);
}
for(i = 0; i < 4; i++) {
    iconArray[i] = "img/icons/icon1, icon2, icon3, icon4" + i + ".png"; 
}
    console.log("Game Over")

function getRandomSquare() {
    var randomNumber = Math.floor((Math.random() * 9) + 1);
    iconArray.push(randomNumber);
    console.log("The following value is the iconArray.")
    console.log(iconArray);
    // Generate a random square for a random icon.
}
function countHits(){
    // Count how many hits a player gets
}
function countMisses() {
    // Count how many times a player misses before game over
}
function animateRandomIcon(tile){
    $('[data-tile = "' + tile + '"]').fadeout();
    setTimeout(function() {
        $('[data-tile = "' + tile + '"]').fadeIn();
    },250);
    // Randoming generate one of four icons and place in random square.
}
function shuffleTiles() {
    getRandomSquare();
    startGame();
    // if $('.start').text('Hits: ' + iconArray.length)//player continues to hit icons then add to the count.

    // if // player misses an icon then display Game Over.
}
function gameRestart() {
    // Restarts the game
}
function gameOver() {
    iconArray =[];
    alert('You lost Sucker!');
    location.reload();
}
function timer() {
    //
}

$()
