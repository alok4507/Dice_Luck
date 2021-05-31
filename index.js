///////img1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

///////img2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

//////textContent

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "😀 Draw!";
}