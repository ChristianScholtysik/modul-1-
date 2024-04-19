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
