import './styles/main.scss';
import { setupRandomMealButton } from './modules/randomMeal.js';
import { setupSearch } from './modules/search';
import { populateFilters, setupFilters } from './modules/filter';
import { setupHeroImage, setupImages } from './modules/images.js'

document.addEventListener('DOMContentLoaded', async () => {
  setupImages();
  setupHeroImage(); // Nustato „Hero“ sekcijos paveikslėlį
  setupRandomMealButton();
  setupSearch();
  await populateFilters();
  setupFilters();
});