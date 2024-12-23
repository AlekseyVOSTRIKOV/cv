export const handleBurgerClick = () => {
  const burgerButton = document.querySelector('.burger');
  const body = document.body;
  const nav = document.querySelector('.nav');

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
    body.classList.toggle('active');
    nav.classList.toggle('active');
  });
};

export const handleMenuItemClick = () => {
  const burgerButton = document.querySelector('.burger');
  const body = document.body;
  const nav = document.querySelector('.nav');
  const menuItems = document.querySelectorAll('.nav__item');

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      burgerButton.classList.remove('active');
      body.classList.remove('active');
      nav.classList.remove('active');
    });
  });
};

export const closeOpenNavAuto = () => {
  const burgerButton = document.querySelector('.burger');
  const body = document.body;
  const nav = document.querySelector('.nav');

  window.addEventListener('resize', () => {
    const clientWidth = document.body.clientWidth;

    if (clientWidth > 690 && body.classList.contains('active')) {
      burgerButton.classList.remove('active');
      body.classList.remove('active');
      nav.classList.remove('active');
    }
  });
};

export const scrollSection = (event) => {
  const targetValue = event.currentTarget.dataset.target;
  const $section = document.querySelector(`[data-name="${targetValue}"]`);
  const $header = document.querySelector('[data-name="header"]');

  const clientPosition = window.pageYOffset;
  const sectionPosition = $section.getBoundingClientRect().top;
  const headerHeight = $header.getBoundingClientRect().height;
  const targetPosition = clientPosition + sectionPosition - headerHeight;

  handleMenuItemClick();
  window.scrollTo(0, targetPosition);
};
