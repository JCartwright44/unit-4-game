// vars to hold the initial values
var answerNumber = 0;
var wins = 0;
var losses = 0;
var gem1 = 0;
var gem2 = 0;
var gem3 = 0;
var gem4 = 0;
var count = 0;
var newCount = 0;

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

// if the user clicks on a gem, that number is added to the total (count)
$('#gem1').on('click', function() {
count = count + gem1;
console.log(count);
});

$('#gem2').on('click', function() {
count = count + gem2;
console.log(count);
});

$('#gem3').on('click', function() {
count = count + gem3;
console.log(count);
});

$('#gem4').on('click', function() {
count = count + gem4;
console.log(count);
});


