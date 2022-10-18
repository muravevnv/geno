const services_slider = new Swiper(".services__slider", {
  allowTouchMove: false,
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,

      pagination: {
        el: ".swiper-pagination",
      },
    },
  },
});

const portfolio_slider = new Swiper(".portfolio__slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
