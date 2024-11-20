// element toggle function
const elemToggleFunc = function (elem) { 
    elem.classList.toggle("active"); 
}


// Navbar Toggle
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll(".navbar-link");

navToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
});

// Close navbar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        // Ensure the navbar closes only when it's active
        if (navbar.classList.contains("active")) {
            elemToggleFunc(navToggleBtn);
            elemToggleFunc(navbar);
            elemToggleFunc(document.body);
        }
    });
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


// Get elements
const hireMeButton = document.getElementById("hireMeButton");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Show popup when "Hire Me" is clicked
hireMeButton.addEventListener("click", function() {
  popup.style.display = "flex";
});

// Close popup when close button is clicked
closePopup.addEventListener("click", function() {
  popup.style.display = "none";
});

// Close popup if clicked outside of the content area
window.addEventListener("click", function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});


// Get elements
const downloadCVButton = document.getElementById("downloadCVButton");
const cvPopup = document.getElementById("cvPopup");
const closeCVPopup = document.getElementById("closeCVPopup");

// Show popup when "Download CV" is clicked
downloadCVButton.addEventListener("click", function() {
  cvPopup.style.display = "flex";
});

// Close popup when close button is clicked
closeCVPopup.addEventListener("click", function() {
  cvPopup.style.display = "none";
});

// Close popup if clicked outside of the content area
window.addEventListener("click", function(event) {
  if (event.target === cvPopup) {
    cvPopup.style.display = "none";
  }
});

