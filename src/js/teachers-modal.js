import manageScroll from './manage-body-scroll';

const teachersHub = [
  {
    id: 1,
    name: 'Maria',
    rating: 2,
    greeting: "Hello, I'm Maria",
    position: "Your teacher in English for Beginners",
    description:
      'I will provide you with detailed feedback and additional learning tips for your language training. Post any questions you have in the chat. I or one of my colleagues will get back to you straight away.',
    about:
      'Soy de Barcelona, España. Me gusta mucho vivir en otros países para poder conocer mejor el país. Desde que terminé la universidad he estado trabajando de profesora de español y de catalán para extranjeros.',
  },
  {
    id: 2,
    name: 'Artem',
    rating: 3,
    greeting: "What's up, I'm Artem",
    position: "Your trainer in American English",
    description:
      'With my innovative teaching techniques and a focus on interactive learning, I am excel in keeping you engaged and motivated',
    about:
      'Artem, lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem debitis odit, atque similique quia hic, eos voluptatem veritatis illum in. Explicabo exercitationem consectetur quos voluptate esse odio doloremque aut amet temporibus, non sint voluptatum necessitatibus',
  },
  {
    id: 3,
    name: 'Ilona',
    rating: 4,
    greeting: "Hello, I'm Ilona",
    position: "Your tutor in English Advanced",
    description:
      'Specialising in advanced English, I provide intensive instruction, ensuring that you gain confidence in complex language tasks',
    about:
      'Ilona, lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem debitis odit, atque similique quia hic,  voluptatem veritatis illum in. Officiis neque, explicabo exercitationem consectetur quos voluptate esse odio doloremque aut amet temporibus, non sint voluptatum necessitatibus',
  },
  {
    id: 4,
    name: 'Volodymyr',
    rating: 5,
    greeting: "Hi, I'm Volodymyr",
    position: "Your teacher in English for Business",
    description:
      'Expert in English for specific purposes, tailoring my approach to meet your individual career and industry-specific language needs',
    about:
      'Volodymyr, lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem debitis odit, atque similique quia hic. Officiis neque, explicabo exercitationem consectetur quos voluptate esse odio doloremque aut amet temporibus, non sint voluptatum necessitatibus',
  },
];

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
    refs.imagesRef.forEach(imageEl => {
      imageEl.classList.add('visually-hidden');
    });
  });

  populateData();
})();
