console.log("meine Datei ist eingebunden");

//!Was ist JavaScript?//
//!mit Console.log() können wir uns texte und andere Daten ausgeben lassen

console.log();

//! ===Variablen===//

//const = wird für Werte verwendet die nicht verändert werden
//let = werden die Werte mehrmals verändert
//!var ist mittlerweile veraltet

//? Const

const trainerName = "Elisa";
console.log("trainerName: ", trainerName);
//!hier kann trainerName nicht veändert weil die Variable eine Constante ist
//trainerName = "Farid";

//? Let

let score = 0;
score = 1;
console.log(score);

//!wenn wir {} verwenden wird die variable score zusammen mit ihrem wert in der konsole angezeigt
console.log({ score });

let age = 20;
let age2 = 32;
console.log(age);

//# shortcut=> clg
console.log(age2);

let realMadridScore = 0;
let barcelonaScore = 0;

realMadridScore = 2;
barcelonaScore = 1;

const gesamtScore = realMadridScore + barcelonaScore;
// wir addieren 2 Werte uns speichern sie in einer neuen Variablen
console.log("Endergebnis ist: ", gesamtScore);

console.log(realMadridScore + barcelonaScore);
console.log(realMadridScore, ":", barcelonaScore);

//! ===DatenTYpe==

// = drei primitive Datentypen => string, number, boolean
//?string
//string sind text Werte
//Um einen String auszugeben müssen wir "" oder '' schreiben
console.log("ich bin ein String");
console.log("10" + "12");

//?Number
//numerische Werte  und werden als lila ausgegeben
console.log(10);

//plus ist das einzige Zeichen mit der man die variable als zeichenkette ausgeben lassen kann

console.log(10 + 12);
console.log("10" + 12 + 22);
console.log(10 + 33 + "vier");
console.log("vier" * 4);
console.log(4 * 4);

//?Boolean
// boolean ist entweder true oder false, sie werden auch lila ausgegeben
console.log("das ist ein boolean-Wert: ", false);
console.log(true);

//! wie sollen wir unsere Variable deklarieren?

// * nicht zu kurz
// let meineFunction = "function"

// *nicht zu lang
//let lassUnsZusammenHeuteSpielAngucken = "Nein, kein Bock"

//* nicht mit Zahlen anfangen
//let 2Pac = "rapper"

//*keine Sonderzeichen
// let $meinGeld /let @meinEmailAccount

//* camelCase
// let camelCase
// let meineErsteVariable = "hallo"

//*under_Score
//let my_first_variable = "hallo"

//*was gar nicht geht
// let gesamt note ="20"

//! === CASE SENSITIV===
let a = 100;
console.log({ a });
let A = 200;
console.log({ A });

//! ===string concatination ===
const firstName = "Christian";
const lastName = "Scholtysik";
const stadt = "Berlin";

//!alt
console.log(
  "ich bin" + " " + firstName + " " + lastName + " " + "und wohne in " + stadt
);
//!template string
console.log(`ich bin ${firstName} ${lastName} und wohne in ${stadt}`);

//! ===arithmetische Operatoren===
let zahl1 = 5;
let zahl2 = 3;
let zahl3 = 20;
//addieren
console.log(zahl1 + zahl2 + zahl3);
//subtrahieren
console.log(zahl1 - zahl2 - zahl3);
//dividieren
console.log(zahl3 / zahl2);
//Multiplizieren
console.log(zahl1 * zahl3);

//modulo => % => gibt uns den Restwert

console.log(zahl3 % zahl1); //0
console.log(5 % 2); //1

//
let zahl5 = 30;
console.log(zahl5);
zahl5++; //wird um 1 erhöht
zahl5++;
console.log(zahl5);

let zahl6 = 20;
zahl6--; //wird um 1 reduziert
zahl6--;
zahl6--;
zahl6--;
console.log(zahl6);

//! ===OUTPUT====
console.log("====Output====");
// -document.write

document.write("Guten Morgen");
document.write("<h2> Ich bin eine Headline </h2>");

// - window.alert

//window.alert("VIRUS");

//! ===INPUT===

//window.prompt()

let sayYourName = window.prompt("Wie heisst du?");
console.log(sayYourName);

// window.confirm

let confirmAge = window.confirm("bist du 18 Jahre alt?");
console.log(confirmAge);
