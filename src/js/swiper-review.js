setTimeout(() => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 500,
    autoheight: false,
    spaceBetween: 32,

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      768: {
        slidesPerView: 2,
        initialSlide: 2,
      },
      1280: {
        slidesPerView: 3,
        initialSlide: 1,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  });
}, 1000);
