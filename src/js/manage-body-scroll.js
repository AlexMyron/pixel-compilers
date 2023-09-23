import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default isOpened => {
  isOpened ? enableBodyScroll(document.body) : disableBodyScroll(document.body);

  const isMacOS = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
  if (isMacOS) return;

  if (!isOpened) {
    document.body.style.width = '100wv';
    document.body.style.borderRight = '17px solid transparent';
  } else {
    document.body.style.width = 'auto';
    document.body.style.borderRight = 'none';
  }
};
