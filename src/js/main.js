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


const data = {
  name: '',
  job: '',
  email: '',
  image: '',
  phone: '',
  linkedin: '',
  github: '',
}

const saveData  = function (event)  {
  const inputData = event.currentTarget.name;
  data[inputData] = event.currentTarget.value;
  render();
};

const render = function () {
  document.querySelector('.js-nameSurname').innerHTML = data.name || "Nombre Apellido";
  document.querySelector('.js-image').href = "" + data.link;
  document.querySelector('.js-phone').innerHTML = data.name || "Nombre Apellido";
  document.querySelector('.js-email').innerHTML = data.name || "Nombre Apellido";
  document.querySelector('.js-linkedin').href = "" + data.link;
  document.querySelector('.js-github').href = "" + data.link;

}