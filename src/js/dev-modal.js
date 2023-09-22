(() => {
  const refs = {
    openDevModalBtn: document.querySelector('[data-dev-modal-open]'),
    closeDevModalBtn: document.querySelector('[data-dev-modal-close]'),
    devModal: document.querySelector('[data-dev-modal]'),
    body: document.querySelector('body'),
  };

  refs.openDevModalBtn.addEventListener('click', toggleModal);
  refs.closeDevModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.devModal.classList.toggle('is-hidden');
    refs.body.classList.toggle('dev-modal-is-open');
  }
})();
