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
}

const buttonLogin = document.querySelector(".button-login");
const popupLogin = document.getElementById("#popup-login");
const buttonRegister = document.querySelector(".popup-login__links-register");
const popupCreate = document.getElementById("#register");
const linkLogin = document.querySelector(".popup-login__links-login");

buttonLogin.addEventListener("click", () => {
  popupLogin.classList.remove("hidden");
});

document.addEventListener("click", (e) => {
  if (e.target === popupLogin) {
    popupLogin.classList.add("hidden");
  }
});

buttonRegister.addEventListener("click", () => {
  popupCreate.classList.remove("hidden");
  popupLogin.classList.add("hidden");
});

document.addEventListener("click", (e) => {
  if (e.target === popupCreate) {
    popupCreate.classList.add("hidden");
  }
});

linkLogin.addEventListener("click", () => {
  popupCreate.classList.add("hidden");
  popupLogin.classList.remove("hidden");
});
