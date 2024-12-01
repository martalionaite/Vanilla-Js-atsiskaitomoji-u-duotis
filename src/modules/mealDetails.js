import axios from "axios";

// Recepto detales is API

export async function getMealDetails(mealId) {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        return response.data.meals[0];
    } catch (error) {
        console.error('Klaida gaunant recepto detales:', error);
        alert('Nepavyko gauti recepto detalių. Bandykite dar kartą.');
    }
}

// Parodo recepta DOM 
export function showMealDetails(meal) {
    const mealDetailsSection = document.getElementById('meal-details');
    document.getElementById('meal-title').textContent = meal.strMeal;
    document.getElementById('meal-image').src = meal.strMealThumb;
    document.getElementById('meal-instructions').textContent = meal.strInstructions;

    const ingredientsList = document.getElementById('meal-ingredients');
    ingredientsList.innerHTML = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const masure = meal[`strMeasure${i}`];
        if (ingredient) {
            const li = document.createElement('li');
            li.textContent = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(li);
        }
    }
    mealDetailsSection.classList.romove('hidden');
}

//uzdaro recepto detales

export function setupCloseDetailsButton() {
    const setupCloseDetailsButton = document.getElementById('close-details');
    if (closeDetailsButton) {
        closeDatailsButton.addEventListener('click', () => {
            document.getElementById('meal-details').classList.add('hidden');
        });
    }
}