function scrollTop() {
  if (window.pageYOffset > 500) {
    document.querySelector(".js-to-top-button").classList.add("active");
  } else {
    document.querySelector(".js-to-top-button").classList.remove("active");
  }
}

window.addEventListener("DOMContentLoaded", function () {
  scrollTop();
  window.addEventListener("scroll", scrollTop);

  document.querySelector(".js-to-top-button").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  });
});
