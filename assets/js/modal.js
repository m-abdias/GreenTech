// modal da aba produtos
const openModalButtonProducts = document.querySelector('.item__btn')
const closeModalButtonProducts = document.querySelector('#close-modal')
const modalProducts = document.querySelector('#modal')
const fadeProducts = document.querySelector('#fade')

//modal da aba estoque
const openModalButtonInventory = document.querySelector('.inventory__item')
const closeModalButtonInventory = document.querySelector(
  '#close-modal-inventory'
)
const modalInventory = document.querySelector('#modalInventory')
const fadeInventory = document.querySelector('#fadeInventory')

function showAndCloseModal(modal, fade, closeModalButton, openModalButton) {
  const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
  }

  ;[openModalButton, closeModalButton, fade].forEach(el => {
    el.addEventListener('click', () => toggleModal())
  })
}

showAndCloseModal(
  modalProducts,
  fadeProducts,
  closeModalButtonProducts,
  openModalButtonProducts
)
console.log(
  modalInventory,
  fadeInventory,
  closeModalButtonInventory,
  openModalButtonInventory
)
showAndCloseModal(
  modalInventory,
  fadeInventory,
  closeModalButtonInventory,
  openModalButtonInventory
)
