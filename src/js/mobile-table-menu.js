import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const backdrop = document.querySelector('.js-menu-backdrop');
  const mobMenuLinks = document.querySelectorAll('.js-menu-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    backdrop.classList.toggle('is-hidden');

    isMenuOpen
      ? enableBodyScroll(document.body)
      : disableBodyScroll(document.body);

    const isMacOS = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
    if (!isMacOS) {
      if (!isMenuOpen) {
        document.body.style.width = '100wv';
        document.body.style.borderRight = '17px solid transparent';
      } else {
        document.body.style.width = 'auto';
        document.body.style.borderRight = 'none';
      }
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  mobMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  })
  backdrop.addEventListener('click', ({ target, currentTarget }) => {
    currentTarget === target && toggleMenu();
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    enableBodyScroll(document.body);
  });
})();
