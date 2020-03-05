var contactButton = document.getElementById("contact-us__button");
var contactUs = document.getElementsByClassName("contact-us")[0];
var closeButton = document.getElementById("close");
var contactNav = document.getElementsByClassName("nav-links__contact")[0];

contactButton.onclick = () => {
    contactUs.style.display = 'flex';
    contactButton.style.display = 'none';
}

contactNav.onclick = () => {
    contactUs.style.display = 'flex';
    contactButton.style.display = 'none';
}

closeButton.onclick = () => {
    contactUs.style.display = 'none';
    contactButton.style.display = 'flex';
}

window.onclick = () => {
    if (event.target == contactUs) {
    contactUs.style.display  = 'none';
    contactButton.style.display = 'flex';
    }
}

 // Define variables for menu bar
 const header = document.querySelector('header');
 const nav = document.querySelector('nav');
 const burgerIcon = document.querySelector('.burger');
 
 // Menu slides in when burger is clicked 
 header.addEventListener('click', showNav);
 function showNav () {
   nav.classList.toggle('navToggle');
 }
 
 // Burger animates when clicked
 header.addEventListener('click', crossBurger);
 function crossBurger() {
   burgerIcon.classList.toggle('toggle');
 }

 burgerIcon.onclick = () => {
    contactUs.style.display = 'none';
    contactButton.style.display = 'flex';
 }