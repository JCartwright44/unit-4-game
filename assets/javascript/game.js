// vars to hold the initial values
var answerNumber = 0;
var wins = 0;
var losses = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var count = 0;

// Randomize the answerNumber
answerNumber = Math.floor(Math.random() * 101 + 19)
console.log("Answer Number is : " + answerNumber); 

gem1 = Math.floor(Math.random() * 12)
console.log("Gem 1 is : " + gem1); 

gem2 = Math.floor(Math.random() * 12)
console.log("Gem 2 is : " + gem2); 

gem3 = Math.floor(Math.random() * 12)
console.log("Gem 3 is : " + gem3); 

gem4 = Math.floor(Math.random() * 12)
console.log("Gem 4 is : " + gem4); 

$('#answer').text('Answer Number: ' + answerNumber);

// Here we can restart the game
function startGame() {
answerNumber = Math.floor(Math.random() * 101 + 19)
console.log("Answer Number is : " + answerNumber); 

gem1 = Math.floor(Math.random() * 12)
console.log("Gem 1 is : " + gem1); 

gem2 = Math.floor(Math.random() * 12)
console.log("Gem 2 is : " + gem2); 

gem3 = Math.floor(Math.random() * 12)
console.log("Gem 3 is : " + gem3); 

gem4 = Math.floor(Math.random() * 12)
console.log("Gem 4 is : " + gem4); 
count = 0;
$('#answer').text('Answer Number: ' + answerNumber);
}



// if the user clicks on a gem, that number is added to the total (count)
$('#gem1').on('click', function() {
count = count + gem1;
$('#current').text('Current Number: ' + count)
console.log(count);
if (count !==  0 && count === answerNumber) {
    wins++;
    console.log('Number of wins : ' + wins);
    $('#wins').text('Wins: ' + wins)
    startGame();
}

else if (count > answerNumber) {
    losses++;
    console.log('Number of losses : ' + losses);
    $('#losses').text('Losses: ' + losses)
    startGame();
}
});

$('#gem2').on('click', function() {
count = count + gem2;
$('#current').text('Current Number: ' + count)
console.log(count);
if (count !==  0 && count === answerNumber) {
    wins++;
    console.log('Number of wins : ' + wins);
    $('#wins').text('Wins: ' + wins)
    startGame();
}

else if (count > answerNumber) {
    losses++;
    console.log('Number of losses : ' + losses);
    $('#losses').text('Losses: ' + losses)
    startGame();
}
});

$('#gem3').on('click', function() {
count = count + gem3;
$('#current').text('Current Number: ' + count)
console.log(count);
if (count !==  0 && count === answerNumber) {
    wins++;
    console.log('Number of wins : ' + wins);
    $('#wins').text('Wins: ' + wins)
    
    startGame();
}

else if (count > answerNumber) {
    losses++;
    console.log('Number of losses : ' + losses);
    $('#losses').text('Losses: ' + losses)
    startGame();
}
});

$('#gem4').on('click', function() {
count = count + gem4;
$('#current').text('Current Number: ' + count)
console.log(count);
if (count !==  0 && count === answerNumber) {
    wins++;
    console.log('Number of wins : ' + wins);
    $('#wins').text('Wins: ' + wins)
    startGame();
}

else if (count > answerNumber) {
    losses++;
    console.log('Number of losses : ' + losses);
    $('#losses').text('Losses: ' + losses)
    startGame();
}
});

// Have to still zero out the game after a win or loss
// Have to still do the css, images, html :)
