let menuBurger = document.querySelector(".header-menu__burger"); //кнопка
let menuHeader = document.querySelector(".header__menu"); //навигация
let headerBackground = document.querySelector(".body__conteiner");
let shadow = document.getElementById("shadow-overlay");
const links = Array.from(menuHeader.children);

menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle("active");
  menuHeader.classList.toggle("active");
  shadow.classList.toggle("shadow__overlay");
}); //opem menu on click burgermenu

window.addEventListener("click", (e) => {
  const target = e.target;
  if (
    !target.closest(".header__menu") &&
    !target.closest(".header-menu__burger")
  ) {
    menuHeader.classList.remove("active");
    menuBurger.classList.remove("active");
    shadow.classList.remove("shadow__overlay");
  }
}); // close menu outside

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  menuHeader.classList.remove("active");
  menuBurger.classList.remove("active");
  shadow.classList.remove("shadow__overlay");
}

//Modal windows
const loginButton = document.querySelector(".header__button");
const popUp = document.querySelector(".pop-up");
const popUp_container = document.querySelector(".modal-log__container");
const openSecondModal = document.getElementById("regisret");
const firstModal = `<h1 class="modal-log__header">Log in to your account</h1> <button class="modal-log__button button_facebook"> <svg class="button-svg_facebook" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23 12.0699C23 5.71857 17.8513 0.569853 11.5 0.569853C5.14872 0.569853 0 5.71857 0 12.0699C0 17.8098 4.20538 22.5674 9.70312 23.4301V15.3941H6.7832V12.0699H9.70312V9.53626C9.70312 6.65407 11.42 5.06204 14.0468 5.06204C15.305 5.06204 16.6211 5.28665 16.6211 5.28665V8.11673H15.171C13.7424 8.11673 13.2969 9.00319 13.2969 9.91264V12.0699H16.4863L15.9765 15.3941H13.2969V23.4301C18.7946 22.5674 23 17.8098 23 12.0699Z" fill="white"/> </svg> Sign In with Facebook </button> <button class="modal-log__button button_google"> <svg class="button-svg_google" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="24" height="24" transform="translate(0.5)" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M23.54 12.2614C23.54 11.4459 23.4668 10.6618 23.3309 9.90909H12.5V14.3575H18.6891C18.4225 15.795 17.6123 17.013 16.3943 17.8284V20.7139H20.1109C22.2855 18.7118 23.54 15.7636 23.54 12.2614Z" fill="#4285F4"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23.4998C15.605 23.4998 18.2081 22.4701 20.1109 20.7137L16.3943 17.8282C15.3645 18.5182 14.0472 18.926 12.5 18.926C9.50474 18.926 6.96951 16.903 6.06519 14.1848H2.22314V17.1644C4.11542 20.9228 8.00451 23.4998 12.5 23.4998Z" fill="#34A853"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06523 14.1851C5.83523 13.4951 5.70455 12.758 5.70455 12.0001C5.70455 11.2421 5.83523 10.5051 6.06523 9.81506V6.83552H2.22318C1.44432 8.38802 1 10.1444 1 12.0001C1 13.8557 1.44432 15.6121 2.22318 17.1646L6.06523 14.1851Z" fill="#FBBC05"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.07386C14.1884 5.07386 15.7043 5.65409 16.8961 6.79364L20.1945 3.49523C18.2029 1.63955 15.5997 0.5 12.5 0.5C8.00451 0.5 4.11542 3.07705 2.22314 6.83545L6.06519 9.815C6.96951 7.09682 9.50474 5.07386 12.5 5.07386Z" fill="#EA4335"/> </svg> Sign In with Google </button> 
<div class="modal-log__separator"> <hr class="separator__line"> <p class="separator__header">or</p> <hr class="separator__line"> </div> <form action="#" class="modal-log__form"> <div class="form__container"> <label class="form__label" for="email-type">E-mail</label> <input class="form__input" type="email" id="email-type"> </div> <div class="form__container"> <label  class="form__label" for="pass-type">Password</label> <input class="form__input" type="password" id="pass-type"> </div> </form> <button class="modal-log__button button_signUp">Sign In</button> <a href="#" class="modal-log__link">Forgot Your Password?</a> <div class="modal-log__separator"> <hr class="separator__line"> <hr class="separator__line"> </div> <p class="modal-log__text" id="modal-log__text">Don’t have an account? <span class="modal-log__link regisret" id="regisret">Register</span></p>`;

const secondModal = `<h1 class="signUp__header modal-log__header">Create account</h1> <form action="#" class="modal-log__form"> <div class="form__container"> <label class="form__label  form__label_modalTwo" for="email-type">E-mail</label> <input class="form__input" type="email" id="email-type"> </div> <div class="form__container"> <label  class="form__label form__label_modalTwo" for="pass-type">Password</label> <input class="form__input" type="password" id="pass-type"> </div> </form> <button class="modal-log__button button_signUp">Sign Up</button> <div class="modal-log__separator separator_modalTwo"> <hr class="separator__line line_botton"> <hr class="separator__line line_botton"> </div> <p class="modal-log__text text_modalTwo">Already have an account? <span class="modal-log__link" id="logInLink">Log in</span></p>`;
let closeSecondModal;
const modalTwo = document.querySelector(".modal-log__container");

loginButton.addEventListener("click", function () {
  popUp.classList.toggle("hidden");
  popUp_container.classList.toggle("active-popup");
}); // open modal window on click by button

const loginbuttonMenu = document.querySelector(".button__logIn");
loginbuttonMenu.addEventListener("click", function () {
  popUp.classList.toggle("hidden");
  popUp_container.classList.toggle("active-popup");
}); // open modal window on click in menu on mobile

function openModalOnClick() {
  modalTwo.classList.add("signUp__container");
  modalTwo.innerHTML = secondModal;
  closeSecondModal = document.getElementById("logInLink");
}

openSecondModal.addEventListener("click", openModalOnClick);

window.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest("#logInLink")) {
    modalTwo.classList.remove("signUp__container");
    modalTwo.innerHTML = firstModal;
    closeSecondModal = ``;
  } else if (target.closest("#regisret")) {
    openModalOnClick();
  }
});
// close

popUp.addEventListener("click", (event) => {
  if (event.target.classList.contains("pop-up")) {
    popUp.classList.remove("hidden");
    popUp_container.classList.remove("active-popup");
  }
}); // close modal window on click inside modal

// alert
function clickOnButtonSingUP() {
  let elemEmail = document.getElementById("email-type").value;
  let elemPass = document.getElementById("pass-type").value;
  let valueInput =
    "EMAIL:" +
    " " +
    elemEmail +
    " ;" +
    " " +
    " " +
    "PASSWORD: " +
    " " +
    elemPass;
  alert(valueInput);
}

window.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".button_signUp")) {
    clickOnButtonSingUP();
  }
});

// Slider

// button arrow
const windowInnerWidth = document.documentElement.clientWidth;
const upBtn = document.querySelector(".right-button");
const downBtn = document.querySelector(".left-button");

const mainSlide = document.querySelector(".scroll__main-slide"); //scroll__galery
const slidesCount = mainSlide.querySelectorAll("div").length; //кол-во слайдеров

// 3.2 создаем переменную, которая отслеживает, какой слайд активный
let activeSlideIndex = 0;
let zero = 0;

if (windowInnerWidth < 392) {
  let activeSlideIndex = 0;
} else activeSlideIndex = 1;

// 3.3 получаем размер экрана
const container = document.querySelector(".destination__scroll_container"); //destination__scroll_container
const boxImg = document.querySelector(".scroll__box");

const width = boxImg.clientWidth;

// 3. Добавляем слушателя на кнопки
upBtn.addEventListener("click", () => {
  changeSlide("right");
});

downBtn.addEventListener("click", () => {
  changeSlide("left");
});

function changeSlide(direction) {
  console.log(activeSlideIndex);
  if (direction === "right") {
    activeSlideIndex++;
    showSlides(activeSlideIndex);
    console.log(activeSlideIndex, "right");

    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "left") {
    activeSlideIndex--;
    showSlides(activeSlideIndex);
    if (activeSlideIndex < 0) {
      activeSlideIndex = 2;
      console.log("--");
      // showSlides(activeSlideIndex)
    }
  }

  let mucg = (mainSlide.style.transform = `translateX(${-(
    activeSlideIndex * width
  )}px)`);
}
const circleBar = document.getElementsByClassName("scroll__bar_circle");

function changeSlideCircle(n) {
  showSlides((activeSlideIndex = n));
  console.log("activeSlideIndex = n", activeSlideIndex);
}

circleBar[activeSlideIndex].className += " active_circle";
function showSlides(n) {
  if (n === slidesCount) {
    activeSlideIndex = 0;
  } else if (n < 0) {
    activeSlideIndex = 0;
  }

  if (windowInnerWidth >= 392) {
    mucg = mainSlide.style.transform = `translateX(${-(
      activeSlideIndex * width +
      600 -
      860
    )}px)`;
  } else
    mucg = mainSlide.style.transform = `translateX(${-(
      activeSlideIndex * width
    )}px)`;

  for (let i = 0; i < circleBar.length; i++) {
    circleBar[i].className = circleBar[i].className.replace(
      " active_circle",
      ""
    );
  }

  circleBar[activeSlideIndex].className += " active_circle";
}
