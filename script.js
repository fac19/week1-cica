const contactButton = document.getElementById("contact-us__button");
const contactUs = document.getElementsByClassName("contact-us")[0];
const modal = document.getElementsByClassName("contact-us__modal")[0];
const closeButton = document.getElementById("close");
const contactNav = document.getElementsByClassName("nav-links__contact")[0];
const allInput = document.querySelectorAll('input')
const submitButton = document.querySelector(".form__submit");
const submitResult = document.querySelector(".form__submit-message");
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

// Define variables for up button 
const btnScrollToTop = document.querySelector('.button-scroll');
// up button appears after a bit of scrolling down
window.addEventListener('scroll', btnAppear);

function btnAppear() {
  if (window.pageYOffset > 500) {
    btnScrollToTop.style.display = 'block';
  } else {
    btnScrollToTop.style.display = 'none';
  }
}

// Back to top when up button is clicked
btnScrollToTop.addEventListener('click', backToTop);

function backToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}


burgerIcon.onclick = () => {
  formDisappear()
}

contactButton.onclick = () => {
  formAppear()
}

submitButton.onclick = (e) => {
    const submitArray = [];

    for (let i = 0; i <allInput.length; i++){
        if (allInput[i].value !== '') {
          submitArray.push(allInput[i]);
        }
    if (submitArray.length == 4 && submitArray[1].value.includes('@')){
         e.preventDefault();
         submitResult.style.display = "flex"
         setTimeout(() => {
         submitResult.style.display = "none"; 
         formDisappear()
         }, 2000);
    }
  }
}

contactNav.onclick = () => {
  formAppear()
}

closeButton.onclick = () => {
  formDisappear()
}

document.onclick = (event) => {
  if (event.target == modal) {
    formDisappear()
  }
}

//This is for the form appearance
function formAppear() {
  contactUs.style.display = 'flex';
  contactButton.style.display = 'none';
}

//This is for the form disappearance
function formDisappear() {
    contactUs.style.display = 'none';
    contactButton.style.display = 'flex';
}
