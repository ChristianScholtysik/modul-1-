//Forms-JS-Level-1_1
const outputCalc = document.querySelector("#output-field");

function doubleMe() {
  let outputVal = Number(document.querySelector("#number").value);
  outputVal = outputVal * 2;
  outputCalc.innerHTML = outputVal;
}

//Forms-JS-Level-1_2

function myAge() {
  const age = Number(document.querySelector("#jahr").value);
  const outputAge = document.querySelector("#meinAlter");
  const score = 2024 - age;
  outputAge.innerHTML = `Du  bist ${score} Jahre alt`;
  console.log(age);
}
