// The completed application should meet the following criteria:

// * As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// * As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// * As a user, I expect the computer to choose R, P, or S in return.

// * As a user, I want the option to play again whether I win or lose.

// * As a user, I want to see my total wins, ties, and losses after each round.
// `alert()`, `confirm()`, and `prompt()`
var win = 0;
var losses = 0;
var ties = 0;


function game(){
var comp = undefined;
var result = undefined;
// starting of the game
window.alert("welcome to the game :)");
var ans = window.prompt(" choose One S,P,R");
var me = ans.toUpperCase();
var res = Math.floor(Math.random() * 4);
if(res<=1){
    window.alert("computer choose s");
    comp = "S";
}else if(res===2){
    window.alert("computer choose P");
    comp = "P";
}else if(res >= 3){
   window.alert("computer choose R");
   comp = "R";
}

if(me === comp){
   result = window.alert("it is a tie");
   ties++;
}
else if (comp === "S" && me === "P") {
    result = window.alert("You win!")
    win++;
}else if(comp === "P" && me === "R"){
    result = window.alert("You win!")
    win++;
}else if(comp === "R" && me === "S"){
    result = window.alert("You win")
    win++;
}else if(me !== "s" && "p" && "R"){
    window.alert("invalid iput")
}
else{
    result = window.alert("computer win!",);
    losses++;
}
window.alert(
    "Stats:\nWins: " + win + "\nLosses: " + losses + "\nTies: " + ties
  );
var again = window.confirm("wanna play again?");
    console.log(again);
    if(again === true){
        game();
    }else{
        window.alert("bye!");
    }
}
game();
  