// let mql = window.matchMedia('(max-width: 767px)');

// window.addEventListener('resize', () => {
//   if (mql.matches) {
//     console.log('111111')
//     let newSwiper = new Swiper('.services__slider', {
//       slidesPerView: 1,
//       centeredSlides: false,
//       spaceBetween: 8,
//       grabCursor: true,
//       init: false,
//       breakpoints:{
//         0: {
//           slidesPerView: 1,
//         },
//         390: {
//           slidesPerView: 2,
//         },
//         600: {
//           slidesPerView: 3,
//         }
//       }
//     });
//   } else {
//     swiper.destroy();
//   }
// })

(function() {

  'use strict';

  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:767px)' );

  // keep track of swiper instances to destroy later
  let mySwiper;

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };
  
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  const enableSwiper = function() {

    mySwiper = new Swiper ('.services__slider', {

      loop: true,
      
      slidesPerView: 'auto',

      centeredSlides: true,

      a11y: true,
      keyboardControl: true,
      grabCursor: true,

      // pagination
      pagination: '.swiper-pagination',
      paginationClickable: true,

    });

  };

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);

  // kickstart
  breakpointChecker();



})();

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
