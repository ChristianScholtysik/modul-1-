// # async-TS-Level-1_1

// # ✅ Aufgabenstellung

// - Erstelle mit Vite ein Vanilla-Typescript Projekt
// - Erstelle eine Datei patient-waiter.ts
// - Erstelle eine Methode waitForTwoSeconds() mit diesem Inhalt

// ```tsx
//   setTimeout(() => {
//     console.log('Thank you for your patience');
//   }, 2000); // Warte für 2 Sekunden
// ```

// - Die Methode soll asynchron aufrufbar sein, d. h. sie soll einen Promise<void> zurückgeben
// - Exportiere die Methode
// - Erstelle eine Datei app.ts
// - Binde patient-waiter.ts ein
// - Lege eine asynchrone Methode main() an
// - Schreibe in der Methode auf die Konsole “Hi, here I am…”
// - Rufe dann waitForTwoSeconds() auf ohne zu warten (ohne await)
// - Schreibe danach auf die Konsole “Hello…”
// - Schreib danach auf die Konsole “Can you hear me…”
// - Rufe main() auf
// - Schau dir in der Ausgabe an, wann was geloggt wird

import { waitForTwoSeconds } from "./src/patient-waiter";

// async function main() {
//   console.log("Hi, here I am...");
//   waitForTwoSeconds();
//   console.log("Hello...");
//   console.log("Can you hear me...");
// }

// main();

// # async-TS-Level-1_2

// # ✅ Aufgabenstellung

// - Wir bauen auf [async-TS-Level-1_1](https://www.notion.so/async-TS-Level-1_1-582a9399e4864f389855c09d91796659?pvs=21) auf
// - Jetzt soll auf die Ausführung von waitForTwoSeconds gewartet werden
// - Passe die Methode waitForTwoSeconds an

//     ```tsx
//       console.log('Starting the waiting...');
//       await new Promise(resolve => setTimeout(resolve, 2000));
//       console.log('Thank you for your patience');
//     ```

// - Schau dir nun die Reihenfolge in der Ausgabe an

// src/app.ts

async function main() {
  console.log("Hi, here I am...");
  await waitForTwoSeconds(); // Hier warten wir auf die Ausführung
  console.log("Hello...");
  console.log("Can you hear me...");
}

main();
