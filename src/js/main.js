"use strict";
//BOTON AÑADIR IMAGEN
const fr = new FileReader();
const uploadBtn = document.querySelector(".js__box-button");
const fileField = document.querySelector(".js__box-button-hidden");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");
const div = document.querySelector(".js-div");
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
  div.classList.add("js__hidden-img");
  data.photo = fr.result;
  localStorage.setItem("form", JSON.stringify(data));
  changeCreateBtn();
  // localStorage.setItem('photo', fr.result);
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
  sendRequest();
}
btnCreate.addEventListener("click", createCard);
("use strict");
//CARD DESIGN
function activateClass(element, classname) {
  element.classList.remove("palette-1", "palette-2", "palette-3");
  element.classList.add(classname);
}
function stylePicker(event) {
  let elementId = event.currentTarget.id;
  let lastLetter = elementId.slice(-1);
  let palette = `palette-${lastLetter}`;
  const nameSurname = document.querySelector(".card__name-surname");
  const cardOccupation = document.querySelector(".card__occupation");
  const cardContactContainer = document.querySelectorAll(
    ".card__contact-container"
  );
  const cardIcons = document.querySelectorAll(".js-icons");
  activateClass(nameSurname, palette);
  activateClass(cardOccupation, palette);
  for (let contactContainer of cardContactContainer) {
    activateClass(contactContainer, palette);
  }
  for (let icon of cardIcons) {
    activateClass(icon, palette);
  }
}
const designColors = document.querySelectorAll(".js-customize-design__colors");
for (let designColor of designColors) {
  designColor.addEventListener("click", stylePicker);
}
let data = {
  name: "",
  job: "",
  email: "",
  photo: "",
  phone: "",
  linkedin: "",
  github: "",
};
const saveData = function (event) {
  const inputData = event.currentTarget.name;
  if (inputData === "name" || inputData === "job") {
    const errorLength = document.querySelector(".js__error-message");
    if (event.currentTarget.value.length < 19) {
      data[inputData] = event.currentTarget.value;
      errorLength.classList.add("js__hidden");
    } else {
      errorLength.classList.remove("js__hidden");
      event.currentTarget.value = event.currentTarget.value.slice(0, -1);
    }
  } else {
    data[inputData] = event.currentTarget.value;
  }

  changeCreateBtn();
  render();
};
function changeCreateBtn() {
  const arrayData = Object.values(data);
  if (arrayData.length == 7) {
    btnCreate.classList.remove("js-cardCreated");
  }
}
changeCreateBtn();
const render = function () {
  document.querySelector(".js-nameSurname").innerHTML =
    data.name || "Nombre Apellido";
  document.querySelector(".js-occupation").innerHTML =
    data.job || "Front-end developer";
  document.querySelector(".js-phone").href = "tel:" + data.phone;
  document.querySelector(".js-email").href = "mailto:" + data.email;
  document.querySelector(".js-linkedin").href =
    "https://www.linkedin.com/in/" + data.linkedin;
  document.querySelector(".js-github").href =
    "https://www.github.com/" + data.github;
  localStorage.setItem("form", JSON.stringify(data));
};
const inputList = document.querySelectorAll(".js-input");
for (const inputItem of inputList) {
  inputItem.addEventListener("keyup", saveData);
}
const getDataFromLocalStorage = function () {
  if (localStorage.getItem("form")) {
    // get data from local storage
    data = JSON.parse(localStorage.getItem("form"));
    profileImage.style.backgroundImage = `url(${data.photo})`;
    document.querySelector(".js-div").classList.add("js__hidden-img");
    // paint data in form
    for (const inputKey in data) {
      console.log(inputKey);
      const input = document.querySelector(".js-input-" + inputKey);
      if (input !== null) {
        input.value = data[inputKey];
      }
    }

    render();
  }
};
getDataFromLocalStorage();
const resetButton = document.querySelector(".js-reset");
const handleReset = function () {
  data.name = "";
  data.job = "";
  data.email = "";
  data.phone = "";
  data.linkedin = "";
  data.github = "";
  for (const input of inputList) {
    input.value = "";
  }
  render();
};
resetButton.addEventListener("click", handleReset);
const linkCont = document.querySelector(".customize-share__link-cont");
function sendRequest() {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}
const linkTwitCont = document.querySelector(".js-twitter-url");
function showURL(result) {
  if (result.success) {
    linkTwitCont.href = result.cardURL;
    linkTwitCont.innerHTML = result.cardURL;
  } else {
    linkTwitCont.innerHTML = "ERROR:" + result.error;
  }
}
const buttonTwitter = document.querySelector(
  ".customize-share__twitter--hidden"
);
function createTwitterLink(result) {
  const twitterText = encodeURIComponent(
    "¡He creado mi tarjeta con Awesome Profile Cards de <em>y</em>! Puedes verla en: "
  );
  const twitterURL = linkTwitCont.href;
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}
buttonTwitter.addEventListener("click", createTwitterLink);
