var contactButton = document.getElementById("contact-us__button");
var modalForm = document.getElementById("modalBox");
var closeButton = document.getElementById("close");

contactButton.onclick = () => {
    modalForm.style.display = 'flex';
}

closeButton.onclick = () => {
    modalForm.style.display = 'none';
}

window.onclick = () => {
    if (event.target == modalForm) {
    modalForm.style.display  = 'none';
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