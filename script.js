var contactButton = document.getElementById("contact-us__button");
var modalForm = document.getElementById("modalBox");
var closeButton = document.getElementById("close");

contactButton.onclick = () => {
    modalForm.style.display = 'flex';
    contactButton.style.display = 'none';

}

closeButton.onclick = () => {
    modalForm.style.display = 'none';
    contactButton.style.display = 'flex';
}

window.onclick = () => {
    if (event.target == modalForm) {
    modalForm.style.display  = 'none';
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