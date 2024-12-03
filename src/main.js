import './styles/main.scss'; // Importuojami SCSS stiliai
import { setupRandomMealButton } from './modules/randomMeal.js'; // Nustato atsitiktinio recepto mygtuką
import { setupSearch } from './modules/search'; // Nustato paieškos funkciją
import { populateFilters, setupFilters } from './modules/filter'; // Užpildo ir nustato filtravimo funkciją
import { setupHeroImage, setupImages } from './modules/images.js'; // Hero paveikslėlis ir kortelių paveikslėliai

// Laukiame, kol DOM bus pilnai užkrautas
document.addEventListener('DOMContentLoaded', async () => {
  setupImages(); // Paveikslėliai receptų kortelėse
  setupHeroImage(); // Nustato „Hero“ sekcijos paveikslėlį
  setupRandomMealButton(); // Nustato atsitiktinio recepto mygtuko veikimą
  setupSearch(); // Nustato paieškos laukelio veikimą
  await populateFilters(); // Užpildo filtrų pasirinkimus (kategorijos, ingredientai ir t.t.)
  setupFilters(); // Nustato filtravimo veikimą
});