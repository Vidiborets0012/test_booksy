// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// import Swiper, { Navigation, Keyboard } from 'swiper/modules';

import { Swiper } from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const heroSlider = new Swiper('.hero-slider', {
  modules: [Navigation, Keyboard],
  slidesPerView: 1,
  slidesPerGroup: 1,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev',
  },
});

const prevButton = document.querySelector('.hero-button-prev');
const nextButton = document.querySelector('.hero-button-next');

function handleButtonClick(button) {
  if (button) {
    window.requestAnimationFrame(() => button.blur());
  }
}

if (prevButton) {
  prevButton.addEventListener('click', function () {
    handleButtonClick(this);
  });
}

if (nextButton) {
  nextButton.addEventListener('click', function () {
    handleButtonClick(this);
  });
}

/*
document.addEventListener('keydown', function (event) {
  // 1. Перевіряємо, чи ми в області слайдера (щоб не конфліктувати з іншими стрілками)
  // Використовуємо .hero-slider як загальний контейнер
  const heroSlider = document.querySelector('.hero-slider');
  const focusedElement = document.activeElement;

  // Якщо фокус не знаходиться в слайдері або на кнопках, ігноруємо
  const isFocusInsideSwiperArea =
    heroSlider.contains(focusedElement) ||
    (focusedElement && focusedElement.classList.contains('hero-slider-button'));

  if (!isFocusInsideSwiperArea) {
    return;
  }

  // 2. Встановлюємо фокус на відповідну кнопку
  switch (event.key) {
    case 'ArrowLeft':
      if (
        prevButton &&
        !prevButton.classList.contains('swiper-button-disabled')
      ) {
        // Примусово встановлюємо фокус на кнопку "Попередній"
        prevButton.focus();

        // Додатково знімаємо фокус з кнопки "Наступний", якщо він там був
        if (nextButton) nextButton.blur();
      }
      // Swiper сам перегорне слайд, оскільки keyboard: enabled: true
      break;

    case 'ArrowRight':
      if (
        nextButton &&
        !nextButton.classList.contains('swiper-button-disabled')
      ) {
        // Примусово встановлюємо фокус на кнопку "Наступний"
        nextButton.focus();

        // Додатково знімаємо фокус з кнопки "Попередній", якщо він там був
        if (prevButton) prevButton.blur();
      }
      // Swiper сам перегорне слайд
      break;

    default:
      return;
  }
});
*/
/*
const prevButton = document.querySelector('.hero-button-prev');
const nextButton = document.querySelector('.hero-button-next');

function handleButtonClick(button) {
  if (button) window.requestAnimationFrame(() => button.blur());
}

// кліки мишкою
[prevButton, nextButton].forEach(btn => {
  btn?.addEventListener('click', function () {
    handleButtonClick(this);
  });
});

// ✅ клавіатурна навігація з урахуванням задізейблених кнопок
function flashButton(btn) {
  btn.classList.add('is-active');
  setTimeout(() => btn.classList.remove('is-active'), 200);
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' && swiper.activeIndex < swiper.slides.length - 1) {
    console.log(swiper.activeIndex);
    swiper.slideNext();
    nextButton.focus();
    flashButton(nextButton);
  } else if (e.key === 'ArrowLeft' && swiper.activeIndex > 0) {
    swiper.slidePrev();
    prevButton.focus();
    flashButton(prevButton);
  }
});

swiper.on('slideChangeTransitionEnd', () => {
  document.activeElement?.blur();
});
*/

// document.addEventListener('keydown', e => {
//   if (e.key === 'ArrowRight') {
//     nextButton?.focus();
//   } else if (e.key === 'ArrowLeft') {
//     prevButton?.focus();
//   }
// });

//**************************
//**************************

/*
// базові стилі
import 'swiper/css';
import 'swiper/css/navigation';

// імпорти модулів
import Swiper from 'swiper';
import { Navigation, A11y } from 'swiper/modules';

// Ініціалізація:
const swiper = new Swiper('.hero-slider', {
  modules: [Navigation, A11y], // НЕ додаємо Keyboard

  slidesPerView: 1,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.hero-button-next',
    prevEl: '.hero-button-prev',
  },

  // a11y: false, // вимикає автофокус і прокрутку при фокусі
});

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') swiper.slidePrev();
  if (e.key === 'ArrowRight') swiper.slideNext();
});
*/

// const container = document.querySelector('.hero');

// container.addEventListener('keydown', e => {
//   if (e.key === 'Tab') {
//     e.preventDefault();
//   }
// });
/*
document.querySelector('.hero-slider').addEventListener(
  'keydown',
  function (e) {
    if (e.key === 'Tab' || e.keyCode === 9) e.stopImmediatePropagation();
  },
  true
);
поведінка не міняється
*/

// swiper.keyboard.disable();

// // 1️⃣ Ініціалізація без Keyboard-модуля
// const swiper = new Swiper('.hero-slider', {
//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   keyboard: {
//     enabled: false, // <-- вимикаємо стандартну клавіатуру Swiper
//   },
//   navigation: {
//     nextEl: '.hero-button-next',
//     prevEl: '.hero-button-prev',
//   },
// });

// // 2️⃣ Додаємо власну обробку стрілок
// document.addEventListener('keydown', e => {
//   // Ігноруємо, якщо користувач у полі введення
//   const tag = document.activeElement?.tagName;
//   if (
//     tag === 'INPUT' ||
//     tag === 'TEXTAREA' ||
//     tag === 'SELECT' ||
//     document.activeElement.isContentEditable
//   )
//     return;

//   // Реакція тільки на стрілки
//   if (e.key === 'ArrowLeft') {
//     swiper.slidePrev();
//   } else if (e.key === 'ArrowRight') {
//     swiper.slideNext();
//   }
// });

/*
document.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.stopPropagation();
  }
});
поведінка не міняється
*/

/*
swiper.keyboard.onKeyDown = function (e) {
  if (e.key === 'Tab') return; // ігноруємо Tab
  swiper.keyboard.handle(e);
};
поведінка не міняється
*/

/*
swiper.keyboard.handle = function (event) {
  const { key } = event;


  if (key === 'Tab' || key === 'TabLeft' || key === 'TabRight') {
    return;
  }


  if (key === 'ArrowLeft') {
    swiper.slidePrev();
  } else if (key === 'ArrowRight') {
    swiper.slideNext();
  }
};
поведінка не міняється
*/

/*
document.querySelectorAll('.hero-slider-link').forEach(link => {
  link.addEventListener('focus', () => {
    swiper.keyboard.disable();
  });

  link.addEventListener('blur', () => {
    swiper.keyboard.enable();
  });
});
поведінка не міняється
*/

/*
Допоміжна функція: перевіряє, чи елемент видимий у вьюпорті (аналог onlyInViewport)
function isElementInViewport(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

Власний обробник клавіш: реагує ТІЛЬКИ на ArrowLeft та ArrowRight,
//     НЕ реагує на Tab і не зачіпає інші елементи вводу (input, textarea, select, contenteditable)
function onDocumentKeyDown(e) {
  const active = document.activeElement;
  const activeTag =
    active && active.tagName ? active.tagName.toLowerCase() : null;
  const isEditable =
    active &&
    (active.isContentEditable ||
      activeTag === 'input' ||
      activeTag === 'textarea' ||
      activeTag === 'select');

  // Якщо фокус у редагованому полі — нічого не робимо
  if (isEditable) return;

  // Переконаємось, що наш слайдер в видимій частині сторінки
  if (!isElementInViewport(document.querySelector('.hero-slider'))) return;

  if (e.key === 'ArrowLeft' || e.key === 'Left') {
    e.preventDefault(); // зупиняємо стандартну поведінку сторінки (опціонально)
    // Перевіряємо чи можна рухатись назад
    if (
      !document
        .querySelector('.hero-button-prev')
        ?.classList.contains('swiper-button-disabled')
    ) {
      swiper.slidePrev();
      // опційно: зсунути фокус на prev button, якщо потрібно:
      // document.querySelector('.hero-button-prev')?.focus();
    }
  } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    e.preventDefault();
    if (
      !document
        .querySelector('.hero-button-next')
        ?.classList.contains('swiper-button-disabled')
    ) {
      swiper.slideNext();
      // document.querySelector('.hero-button-next')?.focus();
    }
  }
}

// Підключаємо обробник на рівні документа (звичайна фаза)
document.addEventListener('keydown', onDocumentKeyDown);
*/

// if (swiper.keyboard && swiper.keyboard._onDocumentKeyDown) {
//   // Знімаємо внутрішній глобальний обробник Swiper
//   document.removeEventListener('keydown', swiper.keyboard._onDocumentKeyDown);
// }

// console.log(window.swiper); //undefined

// const el = document.querySelector('.hero-slider');
// console.log('el:', el); //div
// console.log(Object.keys(window).filter(k => /swiper/i.test(k))); //[]

// console.dir(swiper);
// console.dir(swiper.keyboard);

// **************************
// логувати перші 20 подій keydown з стеком
/*
let i = 0;
function inspector(e) {
  if (i++ > 20) return;
  console.groupCollapsed('keydown', e.key); //keydown Tab
  console.trace(); //console.trace inspector	@	hero.js:178
  console.groupEnd();
}
document.addEventListener('keydown', inspector, true);
*/
/*
Можливі варіанти, чому слайди все одно горталися при Tab

Фокус змінює активний елемент у DOM, і Swiper реагує через фокус/blur на своїй кнопці або контейнері (тобто не на keydown, а на зміну document.activeElement).

Swiper обробляє клавіатуру всередині власного “loop” методу (через internal observer), який запускається під час “keyboard.enable()” і не через звичайний keydown listener.

Використовується “Accessibility module” (a11y) — він може керувати навігацією стрілками і фокусом незалежно від keyboard-модуля.
*/

// console.log(swiper.keyboard); //{enabled: true, enable: ƒ, disable: ƒ}

// console.log(swiper.modules);

// console.log(document.activeElement); //keydown Tab

/*
swiper.keyboard увімкнений → Swiper слухає клавіатуру.

Серед модулів є Keyboard, Navigation, і A11y.

document.activeElement під час натискання Tab — це сам document (тобто фокус ні на чому, тому Swiper приймає подію глобально).

Тобто поведінка, коли Tab гортáє слайди, спричинена саме модулем Keyboard, який обробляє всі keydown-події на document, не перевіряючи, яка саме клавіша.
*/
// console.log(Object.keys(swiper.keyboard)); //['enabled', 'enable', 'disable']
