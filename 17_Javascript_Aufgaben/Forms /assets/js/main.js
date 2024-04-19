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

//Forms-JS-Level-1_3
function compareAge() {
  const difference = document.querySelector("#difference");
  const age1 = Number(document.querySelector("#age1").value);
  const age2 = Number(document.querySelector("#age2").value);
  //   console.log(age1);
  //   console.log(age2);

  const ergebnis = age1 - age2;
  console.log(ergebnis);
  difference.innerHTML = `Die Differenz beträgt: ${ergebnis}`;
}
