const nav = document.querySelector('nav');
const burgerBtn = document.getElementById('burger-btn');
const burgerBtnStick = document.querySelector('burger-btn__stick');

burgerBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  burgerBtn.classList.toggle('active');
})