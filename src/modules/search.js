import axios from 'axios';

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
  
  // Rezultatų atvaizdavimas
 export function displaySearchResults(meals) {
    const searchSection = document.querySelector('.search-section');
    const resultsContainer = document.createElement('div');
    resultsContainer.classList.add('search-results');
  
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

  export function setupSearch() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', async () => {
            const searchTerm = searchInput.ariaValueMax.trim();
            if (searchTerm) {
                const meals = await searchMealsByName(searchTerm);
                displaySearchResults(meals);
            } else {
                alert('Plese enter a meal name to search');
            }

        });
    }
  }
