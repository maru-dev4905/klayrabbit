// 2022-01-15

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  slidesPerGroup: 3,
  speed: 500,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4,
    }
  }
});

// 2022-01-15