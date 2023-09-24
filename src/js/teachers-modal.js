import manageScroll from './manage-body-scroll';
import teachersHub from './teachers-data';

(() => {
  const refs = {
    body: document.querySelector('body'),
    teachersRef: document.querySelectorAll('.js-teacher'),
    imagesRef: document.querySelectorAll('.js-teacher-image'),
    closeModalBtn: document.querySelector('.js-teachers-close'),
    modal: document.querySelector('.js-teachers-modal'),
    aboutEl: document.querySelector('.js-teachers-about'),
    greetingEl: document.querySelector('.js-teachers-greeting'),
    imageEl: document.querySelector('.js-teachers-image'),
    descriptionEl: document.querySelector('.js-teachers-description'),
    ratingEl: document.querySelector('.js-teachers-rating'),
    positionEl: document.querySelector('.js-teachers-position'),
  };

  const toggleModal = () => {
    const isOpened = !refs.modal.classList.contains('is-hidden');

    refs.modal.classList.toggle('is-hidden');

    manageScroll(isOpened);
  };

  const populateData = () => {
    const { teachersRef, greetingEl, descriptionEl, aboutEl, imagesRef, positionEl } = refs;

    teachersRef.forEach(teacher => {
      teacher.addEventListener('click', ({ currentTarget }) => {
        const teacherId = currentTarget.dataset.id;

        teachersHub.forEach(teacherData => {
          if (teacherData.id == teacherId) {
            greetingEl.textContent = teacherData.greeting;
            descriptionEl.textContent = teacherData.description;
            aboutEl.textContent = teacherData.about;
            positionEl.textContent = teacherData.position;
          }
        });

        imagesRef.forEach(imageEl => {
          if (imageEl.dataset.id == teacherId) {
            imageEl.classList.remove('visually-hidden');
          }
        });
      });
    });
  };

  refs.teachersRef.forEach(teacher => {
    teacher.addEventListener('click', toggleModal);
  });

  refs.closeModalBtn.addEventListener('click', () => {
    toggleModal();
    
    setTimeout(() => {
      refs.imagesRef.forEach(imageEl => {
        imageEl.classList.add('visually-hidden');
      }, 300);
    })
  });

  populateData();
})();
