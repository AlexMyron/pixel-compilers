(() => {
  const refs = {
    body: document.querySelector('body'),
    teachersRef: document.querySelectorAll('[data-modal-teachers-open]'),
    closeModalBtn: document.querySelector('[data-modal-teachers-close]'),
    modal: document.querySelector('[data-modal-teachers]'),
  };

  refs.teachersRef.forEach(teacher => {
    teacher.addEventListener('click', toggleModal);
  })
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('dev-modal-is-open');
  }
})();
