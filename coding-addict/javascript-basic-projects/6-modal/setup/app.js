// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");

const toggleModalOverlay = () => {
  modalOverlay.classList.toggle("open-modal");
};
modalBtn.addEventListener("click", () => {
  toggleModalOverlay();
});
closeBtn.addEventListener("click", () => {
  toggleModalOverlay();
});
