const btn = document.querySelector("#button");
const nav = document.querySelector(".nav");
btn.addEventListener("click", () => {
  /* if (nav.classList.contains("nav--show")) {
    nav.classList.remove("nav--show");
  } else {
    nav.classList.add("nav--show");
  } */
  nav.classList.toggle('nav--show');
});

/* MODAL */
const modalBtn = document.querySelector("#contents__video");
const btnClose = document.querySelector(".modal__btn");
const modalOverlay = document.querySelector(".modal-overlay");
modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modalOverlay.classList.add("open-modal");
  document.body.classList.add("fijar-body");
});

btnClose.addEventListener("click", () => {
  modalOverlay.classList.remove("open-modal");
  document.body.classList.remove("fijar-body");
});

/* MODAL REGISTER */
const btnRegister = document.querySelectorAll(".modal");
const registerModal = document.querySelector(".register-modal");
const btnCloseRegister = document.querySelector(".btn-close");

btnRegister.forEach(item => {
    item.addEventListener("click", () => {
        console.log('hOLA');
      registerModal.classList.add("register-open");
      document.body.classList.add("fijar-body");
    });
})

btnCloseRegister.addEventListener("click", () => {
    registerModal.classList.remove("register-open");
    document.body.classList.remove("fijar-body");
});

/* SCROOL REVEAL */
ScrollReveal().reveal(".content", { delay: 200 });
ScrollReveal().reveal(".list", { delay: 200 });