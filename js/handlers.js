export const handleWindowScroll = () => {
  // объект данных
  const clientRect = document.body.getBoundingClientRect();

  // высота всего прокрученного
  const clientPassed = Math.abs(clientRect.top);

  // высота всего документа
  const clientHeight = document.body.clientHeight;

  // высота экрана
  const screenHeight = window.screen.height;

  // выстота сколько не прокручено
  const clientNotPassed = clientHeight - screenHeight;

  // процент прокрученной области
  const percentPassed = Math.floor((clientPassed / clientNotPassed) * 100);

  // прогресс
  const $progressBar = document.querySelector('[data-name="progress-bar"]');

  $progressBar.style.width = `${percentPassed}%`;

  // console.dir(window)

  // console.log('.....')
  // console.log({clientRect})
  // console.log({clientPassed})
  // console.log({clientHeight})
  // console.log({screenHeight})
  // console.log({clientNotPassed})
};

export const handleBurgerClick = () => {
  const burgerButton = document.querySelector('.burger');

  burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('active');
  })
}