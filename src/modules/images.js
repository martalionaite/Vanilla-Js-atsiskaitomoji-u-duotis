import salad from '../images/salad.jpg';
import soup from '../images/soup.jpg';
import plateFood from '../images/plate-food.jpg';
import sarahImg from '../images/sarah.jpg';
import farellinImg from '../images/farellin.jpg';

// Funkcija receptų paveikslėliams
export function setupImages() {
  const saladCard = document.querySelector('.recipe-card:nth-child(1)');
  const soupCard = document.querySelector('.recipe-card:nth-child(2)');

  if (saladCard) {
    const saladImg = saladCard.querySelector('img') || document.createElement('img');
    saladImg.src = salad;
    saladImg.alt = 'Salotos';
    if (!saladCard.contains(saladImg)) {
      saladCard.prepend(saladImg);
    }
  }

  if (soupCard) {
    const soupImg = soupCard.querySelector('img') || document.createElement('img');
    soupImg.src = soup;
    soupImg.alt = 'Sriuba';
    if (!soupCard.contains(soupImg)) {
      soupCard.prepend(soupImg);
    }
  }
}

// Funkcija hero paveikslėliui
export function setupHeroImage() {
  const heroImg = document.getElementById('hero-img');
  if (heroImg) {
    heroImg.src = plateFood;
    heroImg.alt = 'Delicious Meal';
  }
}

// Funkcija atsiliepimams (Sarah ir Farellin)
export function setupTestimonials() {
  const sarahTestimonial = document.querySelector('.testimonial.sarah');
  const farellinTestimonial = document.querySelector('.testimonial.farellin');

  if (sarahTestimonial) {
    const sarahPhoto = sarahTestimonial.querySelector('img') || document.createElement('img');
    sarahPhoto.src = sarahImg;
    sarahPhoto.alt = 'Sarah M.';
    if (!sarahTestimonial.contains(sarahPhoto)) {
      sarahTestimonial.prepend(sarahPhoto);
    }
  }

  if (farellinTestimonial) {
    const farellinPhoto = farellinTestimonial.querySelector('img') || document.createElement('img');
    farellinPhoto.src = farellinImg;
    farellinPhoto.alt = 'Farellin J.';
    if (!farellinTestimonial.contains(farellinPhoto)) {
      farellinTestimonial.prepend(farellinPhoto);
    }
  }
}