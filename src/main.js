import './styles/main.scss';
import { setupRandomMealButton } from './modules/randomMeal.js';
import { setupSearch } from './modules/search';
import { populateFilters, setupFilters } from './modules/filter';
import { setupImages } from './modules/images.js'

document.addEventListener('DOMContentLoaded', async () => {
  setupImages();
  setupRandomMealButton();
  setupSearch();
  await populateFilters();
  setupFilters();
});