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



/* =========  REVIEWS  ========= */
const reviews = [
  {
    id: 1,
    img: "./img/person-1.jpg",
    name: "Andrea",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi saep",
  },
  {
    id: 2,
    img: "./img/person-2.jpg",
    name: "Sara",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi saep Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    img: "./img/person-3.jpg",
    name: "Juan",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi saep Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    img: "./img/person-4.jpg",
    name: "Valentina",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi saep Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptatum.",
  },
  {
    id: 5,
    img: "./img/person-5.jpg",
    name: "Andres",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod nisi saep",
  },
];

//Variables
const containerImage = document.querySelector('.reviews__container-img');
const author = document.querySelector("#author");
const desc = document.querySelector(".reviews__text");
const btnLeft = document.querySelector(".reviews__left");
const btnRight = document.querySelector(".reviews__right");



/* ELEMNT IMG CREATE */
const img = document.createElement('img'); 
img.classList.add('reviews__img');

//Cont
let cont = 0;


window.addEventListener("DOMContentLoaded", () => {
  review(cont);
});

function review(contPerson) {
  img.src = reviews[contPerson].img;
  author.textContent = reviews[contPerson].name;
  desc.textContent = reviews[contPerson].desc;
  containerImage.appendChild(img);
}

btnLeft.addEventListener("click", () => {
  cont--;

  if (cont < 0) {
    cont = reviews.length - 1;
  }

  review(cont)
});

btnRight.addEventListener("click", () => {
  cont++;

  if (cont > reviews.length - 1) {
    cont = 0;
  }
  review(cont)
});