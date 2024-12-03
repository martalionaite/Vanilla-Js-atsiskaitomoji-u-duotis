import axios from "axios";

// Funkcija gauti atsitiktinio recepto detales
async function getRandomMeal() {
  try {
    const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
    return response.data.meals[0];
  } catch (error) {
    console.error("Klaida gaunant atsitiktinį receptą:", error);
    alert("Nepavyko gauti atsitiktinio recepto. Bandykite dar kartą.");
    return null;
  }
}

// Funkcija priskirti veiksmą mygtukui "Explore Recipes"
export function setupRandomMealButton() {
  const exploreButton = document.querySelector(".cta-btn"); // Tinkama klasė iš HTML
  if (exploreButton) {
    exploreButton.addEventListener("click", async () => {
      const randomMeal = await getRandomMeal();
      if (randomMeal) {
        alert(`Try this meal: ${randomMeal.strMeal}`);
      }
    });
  } else {
    console.warn("Explore button nerastas.");
  }
}