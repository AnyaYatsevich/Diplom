document.getElementById('scroll-down-arrow').addEventListener('click', function() {
    const advantagesHeader = document.getElementById('why-us');
    window.scrollTo({
      top: advantagesHeader.offsetTop,
      behavior: 'smooth' // Плавная прокрутка
    });
  });
