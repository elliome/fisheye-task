const modalContainer = document.getElementById("modal-container");

function openModal() {
    modalContainer.classList.remove("modal__container--inactive");
}

function closeModal() {
    modalContainer.classList.add("modal__container--inactive");
}
