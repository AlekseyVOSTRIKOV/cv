import {
  handleBurgerClick,
  handleMenuItemClick,
  closeOpenNavAuto,
  scrollSection,
} from './handlers.js';
import { toolsSlider } from "./toolsSlider.js";

const menuItems = document.querySelectorAll('[data-btn="menuItem"]');

menuItems.forEach((item) => item.addEventListener('click', scrollSection));


handleBurgerClick();
handleMenuItemClick();
closeOpenNavAuto();
toolsSlider.mount();