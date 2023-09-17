console.log('funguju!');

document.addEventListener('DOMContentLoaded', function () {
  /* SCROLL BUTTON FUNCTIONALITY */
  const scrollButton = document.querySelector('.scroll__top');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  scrollButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
