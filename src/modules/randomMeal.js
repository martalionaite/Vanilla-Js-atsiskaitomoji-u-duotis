import axios from "axios";

//Gauti atsitiktini recepta
export async function getMealDetails() {
    try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        return response.data.meals[0];
    }   catch (error) {
        console.error('Klaida gaunant recepto detales:', error);
        alert('Nepavyko gauti recepto detalių. Bandykite dar kartą.');
        return null;
    }
}

// Uzdaro recepto detales
export function setupRandomMealButton() {
    const exploreButton = document.querySelector('.explore-btn');
    if (exploreButton) {
        exploreButton.addEventListener('click', async () => {
            const randomMeal = await getRandomMeal();
            if (randomMeal) {
                alert(`Try this meal: ${randomMeal.strMeal}`);
            }
        });
    } else {
        console.warn('Explote button nerastas.');
    }
}