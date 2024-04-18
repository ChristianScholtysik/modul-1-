const headLine = document.querySelector("h1");
const body = document.querySelector("body");

console.log(headLine);
function one() {
  headLine.style.color = "rgb(255, 53, 113)";
  body.style.background = " #00d4ff ";
}

function two() {
  headLine.style.color = "#57ff35";
  body.style.background = " rgb(250, 0, 196)";
}

function three() {
  headLine.style.color = "rgb(232, 53, 255)";
  body.style.background = " rgba(254, 255, 0, 1)  ";
}

function four() {
  headLine.style.color = "rgba(53, 254, 255, 1)";
  body.style.background = " rgba(255, 59, 0, 1)";
}
