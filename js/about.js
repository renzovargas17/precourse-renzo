const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const map = document.getElementById("iframe");
let mapName = document.getElementById("map-name");
let currentlySelected = 0;
const HaGiang = {
  URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117721.53204495324!2d104.92900172690761!3d22.772881155648598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x36cc79b180b4239d%3A0xb7a373a73bc23544!2sH%C3%A0%20Giang%2C%20Vietnam!5e0!3m2!1ses!2sil!4v1661773328014!5m2!1ses!2sil",
  NAME: "Ha-Giang - Vietnam",
};
const SanCristobal = {
  URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30567.282718669943!2d-92.65990914363378!3d16.73132491123028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ed453b1ea89bcf%3A0x48d55ca34957e2de!2sSan%20Crist%C3%B3bal%20de%20las%20Casas%2C%20Chis.%2C%20M%C3%A9xico!5e0!3m2!1ses!2sil!4v1661773505820!5m2!1ses!2sil",
  NAME: "San Cristobal - Mexico",
};

const GotaVillage = {
  URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.6095213460794!2d123.88071221534734!3d13.802397099836403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a02bd4551f8df7%3A0x1322e0582bcd9731!2sGota%20Village%20Resort!5e0!3m2!1ses!2sil!4v1661774141949!5m2!1ses!2sil",
  NAME: "Gota Village - Philipines",
};

const iframeSources = [HaGiang, SanCristobal, GotaVillage];
prevButton.addEventListener("click", () => {
  currentlySelected--;
  map.src = iframeSources[currentlySelected].URL;
  mapName.textContent = iframeSources[currentlySelected].NAME;
  nextButton.disabled = false;
  if (currentlySelected === 0) {
    prevButton.disabled = true;
  }
});
nextButton.addEventListener("click", function () {
  currentlySelected++;
  map.src = iframeSources[currentlySelected].URL;
  mapName.textContent = iframeSources[currentlySelected].NAME;
  prevButton.disabled = false;
  if (iframeSources.length === currentlySelected + 1) {
    nextButton.disabled = true;
  }
});
