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


function filterSkills(category) {
    const buttons = document.querySelectorAll('.filter-buttons button');
    const skillCards = document.querySelectorAll('.skill-card');

    // Update active button
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');

    // Filter skills
    skillCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}
