randomNumber1 = Math.floor((Math.random() * 6) + 1);
randomNumber2 = Math.floor((Math.random() * 6) + 1);

console.log("Random Number 1 = " + randomNumber1);
console.log("Random Number 2 = " + randomNumber2);

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png")

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}else{
    document.querySelector("h1").innerHTML = "🚩DRAW 🚩";
}