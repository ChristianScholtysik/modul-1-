//Functions-Level-1_2

function intro2(paramName) {
  const name = "SuperCoder:In";
  console.log(`Hi SuperCoder:In. mein Name ist ${paramName}`);
}
intro2("Harry");

intro2("Bert");

//Functions-Level-1_3
function intro3(name, alter, stadt) {
  console.log(
    `Hallo mein Name ist ${name}. Ich bin ${alter}. Ich komme aus ${stadt}`
  );
}

intro3("Christian", "12", "Bielefeld");

//Functions-Level-1_5

function math(zahl1, zahl2) {
  const ergebnis = zahl1 * zahl2;
  console.log(ergebnis);
  const ergebnis2 = zahl1 / zahl2;
  console.log(ergebnis2);
}

math(10, 2);
math(30, 20);
math(100, 2);
math(10, 100);
math(5, 0);
math(45, 173);
