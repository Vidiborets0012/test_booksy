import Swiper from 'swiper/bundle';

const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,
  slidesPerGroup: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev',
  },
});
