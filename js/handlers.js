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

  menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      burgerButton.classList.remove('active');
      body.classList.remove('active');
      nav.classList.remove('active');

    })

  });

}

