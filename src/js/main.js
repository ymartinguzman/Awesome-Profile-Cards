'use strict';
//BOTON AÑADIR IMAGEN

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__box-button');
const fileField = document.querySelector('.js__box-button-hidden');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}


function fakeFileClick() {fileField.click(); }

uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

'use strict';
//DESPLEGABLES

const buttonDesig = document.querySelector('.customize-design__container-btn');
const buttonFill = document.querySelector('.customize-menu__container-btn');
const buttonShare = document.querySelector('.customize-share__container-btn');

const sectionDesig = document.querySelector('.customize-design__colors');
const sectionFill = document.querySelector('.customize-menu__form');
const sectionShare = document.querySelector('.gen-main__customize-share--hidden');
const createCardBtn = document.querySelector('.customize-share__button');

function hideSection(){
  sectionDesig.classList.toggle('js__hidden');
  sectionFill.classList.toggle('js__hidden');
  sectionShare.classList.toggle('js__hidden');
  createCardBtn.classList.toggle('js__hidden');
}

buttonDesig.addEventListener('click', hideSection);
buttonFill.addEventListener('click', hideSection);
buttonShare.addEventListener('click', hideSection);

// Diseño tarjeta (colores --> tarjeta);

const colorsContainer = document.querySelector(".customize-design__colors");
const colorsSelection1 = document.querySelector(".js-customize-design__colors1");
const colorsSelection2 = document.querySelector(".js-customize-design__colors2");
const colorsSelection3 = document.querySelector(".js-customize-design__colors3");

const nameSurname = document.querySelector(".js-card__name-surname");
const occupation = document.querySelector(".js-card__occupation");
const contact = document.querySelector(".js-card__contact-container");
const icon = document.querySelector(".js-card__icon");

const form = document.forms.colorsContainer; // <form> element
const element1 = form.elements.colorsSelection1; // <input> element
const element2 = form.elements.colorsSelection2;
const element3 = form.elements.colorsSelection3;

function stylePicker(event) {
  if (element1 === "true") {
    nameSurname.style.color = "#114e4e";
    nameSurname.style.borderColor = "#438792";
    occupation.style.borderColor = "#438792";
    contact.style.borderColor = "#A2DEAF";
    icon.style.color = "#114e4e";
  } else if (element2 === "true") {
    nameSurname.style.color = "#420101";
    nameSurname.style.borderClor = "#BD1010";
    occupation.style.borderColor = "#BD1010";
    contact.style.borderColor = "#E95626";
    icon.style.color = "#420101";
  } else if (element3 === "true") {
    nameSurname.style.color = "#3E5B65";
    nameSurname.style.borderColor = "#EAB052";
    occupation.style.borderColor = "#EAB052";
    contact.style.borderColor = "#A0C0CF";
    icon.style.color = "#3E5B65";
  }
}

colorsContainer.addEventListener("onselect", stylePicker);