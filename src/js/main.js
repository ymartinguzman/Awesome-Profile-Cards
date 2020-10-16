"use strict";
//BOTON AÑADIR IMAGEN

const fr = new FileReader();
const uploadBtn = document.querySelector(".js__box-button");
const fileField = document.querySelector(".js__box-button-hidden");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

function fakeFileClick() {
  fileField.click();
}

uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);

("use strict");
//DESPLEGABLES

const buttonContainer = document.querySelectorAll(".js-collapsable");
const sectionContainer = document.querySelectorAll(".js-section");
const buttonArrow = document.querySelectorAll(".js-arrow");

function collapseMenu(ev) {
  for (let i = 0; i < buttonContainer.length; i++) {
    if (ev.currentTarget === buttonContainer[i]) {
      sectionContainer[i].classList.toggle("js__hidden");
      buttonArrow[i].classList.toggle("js__button-arrow");
      // console.log("jola");
    } else {
      sectionContainer[i].classList.add("js__hidden");
      buttonArrow[i].classList.remove("js__button-arrow");
    }
  }
}
for (const buttonCollapse of buttonContainer) {
  buttonCollapse.addEventListener("click", collapseMenu);
}
