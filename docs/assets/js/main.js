'use strict';
const fr = new FileReader(),
  uploadBtn = document.querySelector('.js__box-button'),
  fileField = document.querySelector('.js__box-button-hidden'),
  profileImage = document.querySelector('.js__profile-image'),
  profilePreview = document.querySelector('.js__profile-preview');
function getImage(e) {
  const t = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage), fr.readAsDataURL(t);
}
function writeImage() {
  (profileImage.style.backgroundImage = `url(${fr.result})`),
    (profilePreview.style.backgroundImage = `url(${fr.result})`);
}
function fakeFileClick() {
  fileField.click();
}
uploadBtn.addEventListener('click', fakeFileClick),
  fileField.addEventListener('change', getImage);
const buttonDesig = document.querySelector('.customize-design__container-btn'),
  buttonFill = document.querySelector('.customize-menu__container-btn'),
  buttonShare = document.querySelector('.customize-share__container-btn'),
  sectionDesig = document.querySelector('.customize-design__colors'),
  sectionFill = document.querySelector('.customize-menu__form'),
  sectionShare = document.querySelector('.gen-main__customize-share--hidden'),
  createCardBtn = document.querySelector('.customize-share__button');
function createCardEvent(e) {
  createCardBtn.classList.add('js-cardCreated'),
    sectionShare.classList.remove('js__hiddenlink'),
    sectionShare.classList.remove('js__hidden'),
    e.preventDefault();
}
function hideSection(e) {
  e.currentTarget === buttonDesig
    ? (sectionDesig.classList.toggle('js__hidden'),
      sectionFill.classList.add('js__hidden'),
      sectionShare.classList.add('js__hidden'),
      createCardBtn.classList.add('js__hidden'),
      buttonDesig.classList.toggle('js__button-arrow'),
      buttonFill.classList.remove('js__button-arrow'),
      buttonShare.classList.remove('js__button-arrow'))
    : e.currentTarget === buttonFill
    ? (sectionFill.classList.toggle('js__hidden'),
      sectionShare.classList.add('js__hidden'),
      createCardBtn.classList.add('js__hidden'),
      sectionDesig.classList.add('js__hidden'),
      buttonDesig.classList.remove('js__button-arrow'),
      buttonFill.classList.toggle('js__button-arrow'),
      buttonShare.classList.remove('js__button-arrow'))
    : e.currentTarget === buttonShare &&
      (sectionShare.classList.toggle('js__hidden'),
      createCardBtn.classList.toggle('js__hidden'),
      sectionDesig.classList.add('js__hidden'),
      sectionFill.classList.add('js__hidden'),
      buttonDesig.classList.remove('js__button-arrow'),
      buttonShare.classList.toggle('js__button-arrow'),
      buttonFill.classList.remove('js__button-arrow'));
}
createCardBtn.addEventListener('click', createCardEvent),
  buttonDesig.addEventListener('click', hideSection),
  buttonFill.addEventListener('click', hideSection),
  buttonShare.addEventListener('click', hideSection);
