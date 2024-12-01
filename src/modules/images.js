import salad from '../images/salad.jpg';
import soup from '../images/soup.jpg';

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