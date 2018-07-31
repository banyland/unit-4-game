

// establish variables //


var Wins = 0;
var Losses = 0;
var totalScore = 0;
var randomNumber ='';
var images = ['./assets/images/red.jpg','./assets/images/blue.jpg', './assets/images/purple.jpg', './assets/images/green.jpg'];



// function for random number for each game

function randomNumber () {
    randomNumber = Math.floor(Math.random() * 100) + 19;
}

// function to reset crystals each game

function newCrystal () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $('images');
        crystal.addClass('crystal');
        crystal.attr('src', images[i]);
        crystal.attr('value', (Math.floor(Math.random() * 12) + 1));
        $('.clickme').append(crystal);
    }
}
// function to reset HTML 


//function to reset crystals, HTML, counter, random number for each game 

function resetHTML () {
$('.random-number').html(randomNumber);
$('.Wins').html('<p>Wins: ' + Wins + '</p>');
$('.Losses').html('<p>Losses: ' + Losses + '</p>');
$('.totalScore').html(totalScore);
$('.images').empty();
}

function resetGame () {
    randomNumber ();
    totalScore = 0;
    resetHTML ();
    resetCrystals ();
}

randomNumber();
resetHTML ();
newCrystal ();
// Click Functions

function clickCrystals () {
    totalScore += parseInt($(this).attr('value'));
    $('.totalScore').html(totalScore);
    if (totalScore == randomNumber) {
        Wins++;
        resetGame();
    };
    else (totalScore > randomNumber); {
        Losses++;
        resetGame();
    };

};



// keep crystal click active

$(document).on('click', '.crystal', 'clickCrystals');