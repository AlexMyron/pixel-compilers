import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default isOpened => {
  const isMacOS = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent),
    refs = {
      scrollButtonRef: document.querySelector('.js-to-top-button'),
      bodyRef: document.body,
    }

  isOpened ? enableBodyScroll(document.body) : disableBodyScroll(document.body);

  if (isMacOS) return;
  refs.bodyRef.classList.toggle('no-scroll');
  refs.scrollButtonRef.classList.toggle('visually-hidden');
};
