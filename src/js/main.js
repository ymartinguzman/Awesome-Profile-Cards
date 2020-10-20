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

//DESPLEGABLES

const buttonContainer = document.querySelectorAll(".js-collapsable");
const sectionContainer = document.querySelectorAll(".js-section");
const buttonArrow = document.querySelectorAll(".js-arrow");

const btnCreate = document.querySelector(".js-createBtn");
function collapseMenu(ev) {
  for (let i = 0; i < buttonContainer.length; i++) {
    if (ev.currentTarget === buttonContainer[i]) {
      sectionContainer[i].classList.toggle("js__hidden");
      buttonArrow[i].classList.toggle("js__button-arrow");
    } else {
      sectionContainer[i].classList.add("js__hidden");
      buttonArrow[i].classList.remove("js__button-arrow");
    }
  }
}
for (const buttonCollapse of buttonContainer) {
  buttonCollapse.addEventListener("click", collapseMenu);
}

const hiddenLink = document.querySelector(".js-sectionHidden");
function createCard(event) {
  hiddenLink.classList.remove("js__hiddenlink");
  event.preventDefault();
  btnCreate.classList.add("js-cardCreated");
}
btnCreate.addEventListener("click", createCard);
buttonDesig.addEventListener('click', hideSection);
buttonFill.addEventListener('click', hideSection);
buttonShare.addEventListener('click', hideSection);


'use strict';
//CARD DESIGN

function activateClass(element, classname) {
  element.classList.remove('palette-1', 'palette-2', 'palette-3');
  element.classList.add(classname);
}

function stylePicker(event) {
  let elementId = event.currentTarget.id;
  let lastLetter = elementId.slice(-1);
  let palette =`palette-${lastLetter}`;

  const nameSurname = document.querySelector('.card__name-surname');
  const cardOccupation = document.querySelector('.card__occupation');
  const cardContactContainer = document.querySelectorAll('.card__contact-container');
  const cardIcons = document.querySelectorAll('.js-icons');

  activateClass(nameSurname, palette);
  activateClass(cardOccupation, palette);
  for (let contactContainer of cardContactContainer) {
    activateClass(contactContainer, palette);
  }
  for (let icon of cardIcons) {
    activateClass(icon, palette);
  }
}

const designColors = document.querySelectorAll('.js-customize-design__colors');
for (let designColor of designColors) {
  designColor.addEventListener('click', stylePicker);
}


// Código sin convertir sus elementos repetitivos add-remove en una función:


// const nameSurname = document.querySelector('.card__name-surname');
// const cardContactContainer = document.querySelectorAll('.card__contact-container');
// const cardOccupation = document.querySelector('.card__occupation');
// const cardIcons = document.querySelectorAll('.js-icons');


// function stylePicker(event) {
//   let elementId = event.currentTarget.id;
//   let lastLetter = elementId.slice(-1);
//   let palette =`palette-${lastLetter}`;
//   nameSurname.classList.remove('palette', 'palette-2', 'palette-3');
//   nameSurname.classList.add(palette);
//   for (let contactContainer of cardContactContainer) {
//     contactContainer.classList.remove('palette-1', 'palette-2', 'palette-3');
//     contactContainer.classList.add(palette);
//   }
//   cardOccupation.classList.remove('palette-1', 'palette-2', 'palette-3');
//   cardOccupation.classList.add(palette);
//   for (let icon of cardIcons) {
//     icon.classList.remove('palette-1', 'palette-2', 'palette-3');
//     icon.classList.add(palette);
//   }
// }


// const designColors = document.querySelectorAll('.js-customize-design__colors');
// for (let i = 0; i < designColors.length; i++) {
//   designColors[i].addEventListener('click', stylePicker);
// }

