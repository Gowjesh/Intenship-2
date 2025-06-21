var rn1 = Math.ceil(Math.random() * 6);
var ris1 = "images/dice" + rn1 + ".png";
var i1 = document.querySelector(".img1");
i1.setAttribute("src", ris1);

var rn2 = Math.ceil(Math.random() * 6);
var ris2 = "images/dice" + rn2 + ".png";
var i2 = document.querySelector(".img2");
i2.setAttribute("src", ris2);

if (rn1 > rn2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (rn1 < rn2) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "It's a Draw!";
}
