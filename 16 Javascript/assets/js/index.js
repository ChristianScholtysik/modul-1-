// Wiederholung
console.log("es geht");

let userName = "dion";
console.log(userName);
console.log("userName: ", userName);

let zahl1 = "5";
console.log({ zahl1 });

let verheiratet = true;
console.log(`Paul ist verheiratet: ${verheiratet}`);

let zahl2 = 6;
let zahl3 = 7;

let ergebnis = zahl2 + zahl3;
console.log(ergebnis);

console.log("%cThis is a green text", "color:green");
//!Neues Thema

//! Vergleichen - Comparison

// => == vergleicht nur die Werte

// => === vergleicht nicht nur die Werte sondern auch Datentyp

console.log(3 == "3"); //true
console.log(3 === "3"); //false

console.log(1 == 1); //true
console.log(2 == 3); //false

// => != nicht gleich

console.log(3 != 3); //false
console.log(3 !== 3); //false

console.log(3 !== "3"); //true

// => > größer als
//=> < kleiner als
// => >= größer gleich
//=> <=kleiner gleich

console.log(3 > 2); //true
console.log(5 < 30); //true
console.log("a" > "A"); //true

// # Elemente selektieren

const firstChild = document.getElementById("mein_erstes_Kind_als_Id");
console.log(firstChild);
console.log(firstChild.innerHTML);

const secondChild = document.getElementById("mein_zweites_Kind");

secondChild.innerHTML = "lisa fragt egal was";

const thirdChild = document.querySelector(".mein_drittes_Kind");
console.log(thirdChild);

const fourthChild = document.querySelector("#mein_viertes_Kind");
console.log(fourthChild);

const fiftthChild = document.querySelector("section:nth-of-type(2) p");
console.log(fiftthChild);
console.log(fiftthChild.innerHTML);

fiftthChild.innerHTML += " was geht?";
