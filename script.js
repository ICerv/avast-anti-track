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

  // /* ANIMATE IMAGE */

  // const imageToAnimate = document.querySelector('.hero__image');

  // const sr = ScrollReveal();

  // const animateImage = (image) => {
  //   sr.reveal(image, {
  //     scale: 0.85,
  //     duration: 800,
  //     easing: 'ease-in-out',
  //     delay: 200,
  //   });
  // };

  // animateImage(imageToAnimate);
});
