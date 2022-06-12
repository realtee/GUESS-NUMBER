alert("You have 20 guesses.")
var answer = 4;

var guess = prompt ("what's your guess");
for(i=5;i<20;i++) {
  if (answer == guess){
    alert ("You guess correctly");
    break;
  } else {
    guess = prompt ("Try Again")
  }
}