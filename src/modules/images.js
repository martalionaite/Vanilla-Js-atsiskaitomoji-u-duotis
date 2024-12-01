import salad from '../images/salad.jpg';
import soup from '../images/soup.jpg';
import plateFood from '../images/plate-food.jpg';

export function setupImages() {
const saladCard = document.querySelector('.recipe-card:nth-child(1)');
const soupCard = document.querySelector('.recipe-card:nth-child(2)')

if (saladCard) {
    const saladImg = saladCard.querySelector('img') || document.createElement('img');
    saladImg.src = salad;
    saladImg.alt = 'Salotos';
    if (!saladCard.contains(saladImg)) {
      saladCard.prepend(saladImg);
    }
  } else {
    console.error('Elementas su klase "recipe-card:nth-child(1)" nerastas.');
  }

  if (soupCard) {
    const soupImg = soupCard.querySelector('img') || document.createElement('img');
    soupImg.src = soup;
    soupImg.alt = 'Sriuba';
    if (!soupCard.contains(soupImg)) {
      soupCard.prepend(soupImg);
    }
  } else {
    console.error('Elementas su klase "recipe-card:nth-child(2)" nerastas.');
  }
}

/* galimai trinti */
export function setupHeroImage() {
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    heroImg.src = plateFood; // Nustatome paveikslėlio kelią
    heroImg.alt = 'Delicious Meal'; // Pridedame alternatyvų tekstą
  } else {
    console.error('Hero image elementas nerastas.');
  }
}