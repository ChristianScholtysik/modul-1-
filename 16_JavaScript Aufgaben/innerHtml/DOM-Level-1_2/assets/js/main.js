const infoElement = document.getElementById("info");

console.log(infoElement);

infoElement.innerHTML = "<h1>Hello World</h1>";
infoElement.innerHTML += "<h2>How are you?</h2>";

const containerElement = document.getElementById("container");

console.log(containerElement);
containerElement.innerHTML = "<p>start of the element</p>";
document.write("end of the element");
