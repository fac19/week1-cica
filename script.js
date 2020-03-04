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