
// document.querySelector("button").onclick() = function()
function rollDice(){
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// /* this var image1 ain't working
// var image1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1 //1-6

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png"); //random dice 1-6 img
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png"); //random dice 1-6 img

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw !⛔";
}

}
