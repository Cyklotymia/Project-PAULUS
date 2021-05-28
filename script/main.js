const nav = document.querySelector(".header__nav");

nav.addEventListener("click", (e) => {
    if (e.target.closest(".header__nav-hamburger")) {
        nav.querySelector(".header__nav-hamburger").classList.toggle("active");
    };

});



