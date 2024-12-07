import axios from 'axios';

// Funkcija paieškai pagal pavadinimą
export async function searchMealsByName(name) {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals by name:', error);
    return null;
  }
}

// Funkcija loader'io rodymui
export function displayLoader(show) {
  const searchSection = document.querySelector('.search-section');
  let loader = document.querySelector('.loader');

  if (show) {
    // Jei loader dar nėra, sukuriame jį
    if (!loader) {
      loader = document.createElement('div');
      loader.classList.add('loader');
      loader.textContent = 'Loading...';
      searchSection.appendChild(loader);
    }
  } else {
    // Jei loader egzistuoja, pašaliname jį
    if (loader) loader.remove();
  }
}

// Rezultatų atvaizdavimas
export function displaySearchResults(meals) {
  const searchSection = document.querySelector('.filters-section');
  const resultsContainer = document.createElement('div');
  resultsContainer.classList.add('search-results');

  // Patikriname, ar yra rezultatai
  if (meals) {
    meals.forEach((meal) => {
      const mealCard = document.createElement('div');
      mealCard.classList.add('meal-card');

      mealCard.innerHTML = `
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <h3>${meal.strMeal}</h3>
        <p>${meal.strCategory} | ${meal.strArea}</p>
      `;

      resultsContainer.appendChild(mealCard);
    });
  } else {
    resultsContainer.textContent = 'No results found. Please try another search.';
  }

  // Išvalome senus rezultatus ir rodome naujus
  const oldResults = document.querySelector('.search-results');
  if (oldResults) oldResults.remove();
  searchSection.appendChild(resultsContainer);
}

// Nustatome paieškos mygtuko veikimą
export function setupSearch() {
  const searchButton = document.getElementById('search-button');
  const searchInput = document.getElementById('search-input');

  if (searchButton && searchInput) {
    searchButton.addEventListener('click', async () => {
      const searchTerm = searchInput.value.trim();

      if (searchTerm) {
        displayLoader(true); // Rodyti loader'į
        try {
          const meals = await searchMealsByName(searchTerm);
          displaySearchResults(meals);
        } finally {
          displayLoader(false); // Paslėpti loader'į
        }
      } else {
        alert('Please enter a meal name to search');
      }
    });
  }
}
