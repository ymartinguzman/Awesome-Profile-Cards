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

function createCardEvent (event) {
  createCardBtn.classList.add('js-cardCreated');
  sectionShare.classList.remove('js__hiddenlink');
  sectionShare.classList.remove('js__hidden');
  event.preventDefault();
}
createCardBtn.addEventListener('click', createCardEvent);

function hideSection(event){
  if (event.currentTarget === buttonDesig){
    sectionDesig.classList.toggle('js__hidden');
    sectionFill.classList.add('js__hidden');
    sectionShare.classList.add('js__hidden');
    createCardBtn.classList.add('js__hidden');
    buttonDesig.classList.toggle('js__button-arrow');
    buttonFill.classList.remove('js__button-arrow');
    buttonShare.classList.remove('js__button-arrow');
  } else if (event.currentTarget === buttonFill){
    sectionFill.classList.toggle('js__hidden');
    sectionShare.classList.add('js__hidden');
    createCardBtn.classList.add('js__hidden');
    sectionDesig.classList.add('js__hidden');
    buttonDesig.classList.remove('js__button-arrow');
    buttonFill.classList.toggle('js__button-arrow');
    buttonShare.classList.remove('js__button-arrow');
  } else if (event.currentTarget === buttonShare){
    sectionShare.classList.toggle('js__hidden');
    createCardBtn.classList.toggle('js__hidden');
    sectionDesig.classList.add('js__hidden');
    sectionFill.classList.add('js__hidden');
    buttonDesig.classList.remove('js__button-arrow');
    buttonShare.classList.toggle('js__button-arrow');
    buttonFill.classList.remove('js__button-arrow');
  }
}

buttonDesig.addEventListener('click', hideSection);
buttonFill.addEventListener('click', hideSection);
buttonShare.addEventListener('click', hideSection);


'use strict';
//CARD DESIGN


/*const cardPaletteContainer1 = document.querySelector('.customize-design__colors1');
const cardPaletteContainer2 = document.querySelector('.customize-design__colors2');
const cardPaletteContainer3 = document.querySelector('.customize-design__colors3');

const palette1 = document.querySelector('.palette-1');
const palette2 = document.querySelector('.palette-2');
const palette3 = document.querySelector('.palette-3');*/

const designColors = document.querySelectorAll('.js-customize-design__colors');
const nameSurname = document.querySelector('.card__name-surname');
const cardContactContainer = document.querySelector('.card__contact-container');
const cardOccupation = document.querySelector('.card__occupation');
const cardIcons = document.querySelector ('.js-icons');


function stylePicker() {
  let elementId = event.currentTarget.id;
  let lastLetter = elementId.str.slice(-1);
  let palette =`palette-${lastLetter}`;
  console.log(palette);
  nameSurname.classList.remove('palette-1', 'palette-2', 'palette-3');
  nameSurname.classList.add(palette);
  cardContactContainer.classList.remove('palette-1', 'palette-2', 'palette-3');
  cardContactContainer.classList.add(palette);
  cardOccupation.classList.remove('palette-1', 'palette-2', 'palette-3');
  cardOccupation.classList.add(palette);
  cardIcons.classList.remove('palette-1', 'palette-2', 'palette-3');
  cardIcons.classList.add(palette);


}



designColors.addEventListener('click', stylePicker);
