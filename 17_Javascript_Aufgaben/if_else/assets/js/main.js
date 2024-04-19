//Conditionals-Level-1_1

function adult() {
  const age = Number(document.querySelector("#age").value);
  const info = document.querySelector("#age-check");

  if (age >= 18) {
    info.innerHTML = `Du bist volljähtig`;
  } else {
    info.innerHTML = `Vergiss es du minderjähriger Depp`;
  }
}

//Conditionals-Level-1_2

function weather() {
  const weatherValue = Number(document.querySelector("#wetter").value);
  const weatherQuality = document.querySelector("#weather-check");

  if (weatherValue >= 8 && weatherValue <= 10) {
    weatherQuality.innerHTML = `Super`;
  } else if (weatherValue >= 6 && weatherValue <= 7) {
    weatherQuality.innerHTML = `Gut`;
  } else if (weatherValue >= 3 && weatherValue <= 5) {
    weatherQuality.innerHTML = `Okay`;
  } else {
    weatherQuality.innerHTML = `Schlecht`;
  }
}

//Conditionals-Level-1_3

function shisha() {
  const alter = Number(document.querySelector("#alters-check").value);
  const information = document.querySelector("#age-verification");

  if (alter >= 18) {
    information.innerHTML = `Du darfst Shisha rauchem`;
  } else {
    information.innerHTML = `Vergiss es du minderjähriger Depp`;
  }
}

//Conditionals-Level-2_2

function checkAirQuality() {
  const range = Number(document.querySelector("#air").value);
  const reihe1 = document.querySelector("#row1");
  const reihe2 = document.querySelector("#row2");
  const hintergrund = document.querySelector("body");

  if (range <= 50) {
    reihe1.innerHTML = `Level of health concern:  Good`;
    reihe2.innerHTML = `effect: Little or no risk`;
    hintergrund.style.backgroundColor = "lightgreen";
  } else if (range >= 50 && range <= 100) {
    reihe1.innerHTML = `Level of health concern:  Moderate Level of health`;
    reihe2.innerHTML = `effect: Acceptable quality`;
    hintergrund.style.backgroundColor = "yellow";
  } else {
    reihe1.innerHTML = `Level of health concern:  Unhealthy for sensitive groups`;
    reihe2.innerHTML = `effect: Generable publics not likely affected`;
    hintergrund.style.backgroundColor = "red";
  }
}

//Conditionals-Level-2_3

function twentySeven(zahl1) {
  let differenz = 27 - zahl1;

  if (zahl1 > 27) {
    differenz = zahl1 - 27;
    const diff2 = differenz * 2;
    console.log(diff2);
  } else {
    console.log(differenz);
  }
}

twentySeven(26);
