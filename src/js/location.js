document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.location');
  const iframe = section.querySelector('iframe');

  if (!iframe) return;

  // Зберігаємо src і прибираємо його, щоб не вантажився одразу
  const mapSrc = iframe.src;
  iframe.removeAttribute('src');
  iframe.setAttribute('data-src', mapSrc);
  iframe.style.opacity = '0';
  iframe.style.transition = 'opacity 0.2s ease';

  // Спостерігаємо, коли секція потрапить у поле зору
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Підставляємо реальне посилання
        iframe.src = iframe.dataset.src;
        iframe.onload = () => (iframe.style.opacity = '1');
        obs.disconnect();
      }
    });
  });

  observer.observe(section);
});
