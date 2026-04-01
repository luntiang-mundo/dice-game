
        // player1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);


        // player2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2);


var playerWinResult = document.querySelector("h1");

if (randomNumber1 < randomNumber2){
    playerWinResult.innerHTML = "player 2 win!";
}
else if (randomNumber1 > randomNumber2){
    playerWinResult.innerHTML = "player 1 win!";
} else {
    playerWinResult.innerHTML = "Draw!";

}