// var test = document.getElementById("test");
// console.log(test.innerHTML);
// console.log(document.getElementsByClassName("first"));

// console.log(document.querySelectorAll(".first"));

var first = document.querySelector(".first");
var firstH2 = first.querySelector("h2");
console.log(firstH2);
var buttons = document.querySelectorAll("button");
console.log(buttons);

function changeColor(event) {
  var cible = event.target;
  var color = cible.innerHTML;
  console.log(color);

  firstH2.style.color = color;
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeColor);
}
