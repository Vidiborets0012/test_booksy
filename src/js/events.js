// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import Swiper from 'swiper/bundle';

const eventsSlider = new Swiper('.events-swiper', {
  // modules: [Navigation, Pagination, Keyboard],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.events-button-next',
    prevEl: '.events-button-prev',
  },
  keyboard: {
    enabled: true, // Увімкнути керування з клавіатури
    onlyInViewport: true, // Працює лише коли слайдер у полі зору
  },
  grabCursor: true,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

//  JS-code for section Events Booksy

const eventList = document.querySelector('.events-list');
eventList.addEventListener('click', event => {
  const openBtn = event.target.closest('.event-btn');
  if (!openBtn) {
    return;
  }
  const eventItem = openBtn.closest('.event-item');
  if (!eventItem) {
    return;
  }
  const eventTitle = eventItem.querySelector('.event-subtitle').textContent;
  subtitleModal.textContent = eventTitle;

  openBtnContactModal();
});

function openBtnContactModal() {
  contactModal.classList.remove('window-is-invisible');
  document.body.classList.add('not-scrolling-page');

  document.addEventListener('keydown', onEscKeyPress);
}

/*
          <img
            class="events-image"
            src="/img/events/img-1x.jpg.jpg"
            srcset="
              /img/events/img-1.jpg.jpg    1x,
              /img/events/img-1.jpg@2x.jpg 2x
            "
            alt="Cozy Book Club — The Midnight Library"
            class="event-img"
          />

          прибрати в html дублюючі класи  class="events-image"/class="event-img"
*/
