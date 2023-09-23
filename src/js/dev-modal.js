import manageScroll from './manage-body-scroll';

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
    const { devModal, body } = refs,
      isOpened = !devModal.classList.contains('is-hidden');

    devModal.classList.toggle('is-hidden');
    body.classList.toggle('dev-modal-is-open');
    manageScroll(isOpened);
  }
})();
