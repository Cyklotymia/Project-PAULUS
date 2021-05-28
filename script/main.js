const nav = document.querySelector(".header__nav");


const offerSection=document.querySelector(".offer")
const proccesSection=document.querySelector(".procces")
const gallerySection=document.querySelector(".gallery")

let bottomOfpage;

nav.addEventListener("click", (e) => {
    if (e.target.closest(".header__nav-hamburger")) {
        nav.querySelector(".header__nav-hamburger").classList.toggle("active");
    };

});



