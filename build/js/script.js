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
