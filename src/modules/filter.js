import axios from 'axios';
import { displaySearchResults  } from "./search.js";
    
export async function populateFilters() {
    const categorySelect = document.getElementById('category-filter');
    const ingredientSelect = document.getElementById('ingredient-filter');
    const areaSelect = document.getElementById('area-filter');
    
    try {
      const categoriesResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      categoriesResponse.data.meals.forEach((category) => {
        const option = document.createElement('option');
        option.value = category.strCategory;
        categorySelect.appendChild(option);
      });

      //Gauti ingredientus
      const ingredientsResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      ingredientsResponse.data.meals.forEach((ingredient) => {
        const option = document.createElement('option');
        option.value = ingredient.strIngredient;
        option.textContent = ingredient.strIngredient;
        ingredientSelect.appendChild(option);
      });

      // Gauti regionus
      const areasResponse = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      areasResponse.data.meals.forEach((area) => {
        const option = document.createElement('option');
        option.value = area.strArea;
        option.textContent = area.strArea;
        areaSelect.appendChild(option);
      });
    } catch (erorr) {
      console.error('Nepavyko užpildyti filtrų:', error);
    }
  }

  export function setupFilters() {
    const filterButton = document.getElementById('filter-button');
    if (filterButton) {
        filterButton.addEventListener('click', async () => {
            const category = document.getElementById('category-filter').value;
            const ingredient = document.getElementById('ingredient-filter').value;
            const area = document.getElementById('area-filter').value;

            const meals = await filterMeals(category, ingredient, area);
            displaySearchResults(meals);
        });
    }
  }

  //Funkcija filtracimui pagal kategorija, ingredienta ir regiona
  async function filterMeals(category, ingredient, area) {
    try {
      let url = '';
      if (category) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      } else if (ingredient) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
      } else if (area) {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`;
      }
      if (url) {
        const response = await axios.get(url);
        return response.data.meals;
      }
      return [];
    } catch (error) {
        console.error('Klaida filtruojant receptus:', error);
        return [];
      }
    }