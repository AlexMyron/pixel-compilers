(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-teachers-open]'),
    closeModalBtn: document.querySelector('[data-modal-teachers-close]'),
    modal: document.querySelector('[data-modal-teachers]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
