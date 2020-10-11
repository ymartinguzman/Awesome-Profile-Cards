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

const buttonDesig = document.querySelector(".customize-design__container-btn");
const buttonFill = document.querySelector(".customize-menu__container-btn");
const buttonShare = document.querySelector(".customize-share__container-btn");

const sectionDesig = document.querySelector(".customize-design__colors");
const sectionFill = document.querySelector(".customize-menu__form");
const sectionShare = document.querySelector(".gen-main__customize-share--hidden");
const createCardBtn = document.querySelector(".customize-share__button");

function hideSection(){
  sectionDesig.classList.toggle("js__hidden");
  sectionFill.classList.toggle("js__hidden");
  sectionShare.classList.toggle("js__hidden");
  createCardBtn.classList.toggle("js__hidden");
}


buttonDesig.addEventListener("click", hideSection);
buttonFill.addEventListener("click", hideSection);
buttonShare.addEventListener("click", hideSection);