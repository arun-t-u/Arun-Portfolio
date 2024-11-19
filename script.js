// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


// Navbar Toggle
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
});