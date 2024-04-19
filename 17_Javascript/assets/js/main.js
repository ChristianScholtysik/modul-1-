//# Wiederholung
//* Counter -> functions und innerHTML

let outputVal = 0;
const outputCalc = document.querySelector(".output-calc");

function superFunc(operator) {
  outputVal = outputVal + operator;
  outputCalc.innerHTML = outputVal;
}

function malZwei() {
  outputVal = outputVal * 2;
  outputCalc.innerHTML = outputVal;
}

function reset() {
  outputVal = 0;
  outputCalc.innerHTML = outputVal;
}

//* Funktion ein Argument übergeben
//? Parameter = Platzhalter bei der Definition der Funktion
//? Argument = der Wert der an die Funktion übergeben wird, wenn sie aufgerufen wird

//% MERKE: man vergibt erst den PArameter und das Argument kommt später

function sayHi(name) {
  const outputDiv = document.querySelector(".btn-output");
  outputDiv.innerHTML = `hallo ${name}`;
}

//! NEUE THEMEN
//? Value auslesen

function getInputValue() {
  let name = document.querySelector(".name").value; // wir greifen auf den WErt vom Input-Feld mit der Klasse "name" zu

  let age = Number(document.querySelector(".number").value); //% Funktion Number konvertiert die WErte in nummnern
  let range = Number(document.querySelector(".range").value);
  let checkbox = document.querySelector(".checkbox").checked; //% checked fragt ob die Checkbox angewählt wurde. ich bekomme einen true oder false zurück
  let date = document.querySelector(".bday").value;
  const output = document.querySelector("form-output");

  console.log({ name }, { age }, { range }, { checkbox }, { date });
  console.log(name);

  output.innerHTML = ` ${name},${age}, ${range}, ${checkbox}, ${date}`;

  output.innerHTML =
    name + " " + age + " " + range + " " + checkbox + " " + date;
}
