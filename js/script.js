const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

const buttonLogin = document.querySelector(".button-login");
const popupLogin = document.getElementById("#popup-login");
const buttonRegister = document.querySelector(".popup-login__links-register");
const popupCreate = document.getElementById("#register");
const linkLogin = document.querySelector(".popup-login__links-login");

buttonLogin.addEventListener("click", () => {
  popupLogin.classList.remove("hidden");
  document.body.classList.add("_lock");
});

document.addEventListener("click", (e) => {
  if (e.target === popupLogin) {
    popupLogin.classList.add("hidden");
    document.body.classList.remove("_lock");
  }
});

buttonRegister.addEventListener("click", () => {
  popupCreate.classList.remove("hidden");
  popupLogin.classList.add("hidden");

});

document.addEventListener("click", (e) => {
  if (e.target === popupCreate) {
    popupCreate.classList.add("hidden");
    document.body.classList.remove("_lock");
  }
});

linkLogin.addEventListener("click", () => {
  popupCreate.classList.add("hidden");
  popupLogin.classList.remove("hidden");
});




const burgerButton = document.querySelector(".menu__icon");
const navList = document.querySelector(".nav__list");
const accountButton = document.querySelector(".nav__item-linkLogin");



burgerButton.addEventListener("click", () => {
  navList.classList.toggle("nav__list-hidden");
  burgerButton.classList.toggle("active");

  if (navList) {
    const nav = document.querySelector(".nav")
    document.addEventListener("click", (e) => {
      const click = e.composedPath().includes(nav)
      if (!click) {
        navList.classList.add("nav__list-hidden");
        burgerButton.classList.remove("active");
      }
    });
  }
});

const navItem = navList.querySelectorAll(".nav__item-link").forEach(link => {
  link.addEventListener("click", () => {
    navList.classList.add("nav__list-hidden");
    burgerButton.classList.remove("active");
  })
});


accountButton.addEventListener("click", () => {
  navList.classList.add("nav__list-hidden");
  popupLogin.classList.remove("hidden");
  burgerButton.classList.remove("active");
  document.body.classList.add("_lock");

});


// SLIDER

new Swiper('.destination__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.5,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    910: {
      slidesPerView: 1.5,
    }
  },

 


})