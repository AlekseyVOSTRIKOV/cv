import { handleWindowScroll, handleBurgerClick } from './handlers.js';
import { toolsSlider } from "./toolsSlider.js";


window.addEventListener('scroll', handleWindowScroll);
handleBurgerClick();
toolsSlider.mount();