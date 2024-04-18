const gallery = document.querySelector("#gallery");
console.log(gallery);

function Galerie() {
  const figure1 = gallery.querySelector("figure:nth-of-type(1)");
  console.log(figure1);

  figure1.innerHTML +=
    '<img src="./assets/img/1.jpg" alt="" width="400px" height="200px" />';
  //zweites Bild
  const figure2 = gallery.querySelector("figure:nth-of-type(2)");
  console.log(figure2);

  figure2.innerHTML +=
    '<img src="./assets/img/esmonde-yong-liuaCgkTsUI-unsplash.jpg" alt="" width="400" height="200" />';
  //drittes Bild
  const figure3 = gallery.querySelector("figure:nth-of-type(3)");
  console.log(figure2);

  figure3.innerHTML +=
    '<img src="./assets/img/our-life-in-pixels-NTgpfFue4W8-unsplash.jpg" alt="" width="400" height="200" />';
}

Galerie();
