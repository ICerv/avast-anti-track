/* SCROLL BUTTON FUNCTIONALITY */

document.addEventListener('DOMContentLoaded', function () {
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

/* DARK/LIGHT THEME */

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

const currentTheme = localStorage.getItem('theme')
  ? localStorage.getItem('theme')
  : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
};

toggleSwitch.addEventListener('change', switchTheme, false);
