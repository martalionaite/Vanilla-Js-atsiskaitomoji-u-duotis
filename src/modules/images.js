// Importuojame paveikslėlius iš „src/images“
import salad from '../images/salad.jpg';
import soup from '../images/soup.jpg';
import plateFood from '../images/plate-food.jpg';
import sarahImg from '../images/sarah.jpg';
import farellinImg from '../images/farellin.jpg';
import beef from '../images/beef-teriyaki.jpg';
import mushroom from '../images/mushroom-soup.jpg';
import pancakes from '../images/pancakes.jpg';
import potatoes from '../images/potatoes.jpg';
import about from '../images/about.jpg';
import community1 from '../images/community1.jpg';
import community2 from '../images/community2.jpg';
import community3 from '../images/community3.jpg';
import community4 from '../images/community4.jpg';
import lady from '../images/lady.jpg';
import emily from '../images/emily.jpg';
import susan from '../images/susan.jpg';
import Lilac from '../images/Lilac.jpg';
import iphone from '../images/iphone.jpg';
import app from '../images/app.jpg';
import google from '../images/google.jpg';

// Funkcija, įdedanti paveikslėlius į receptų korteles
export function setupImages() {
  const imageMapping = [
    { selector: '.recipe-card:nth-child(1)', src: salad, alt: 'Salotos' },
    { selector: '.recipe-card:nth-child(2)', src: soup, alt: 'Sriuba' },
    { selector: '.recipe-card:nth-child(3)', src: beef, alt: 'Beef Teriyaki' },
    { selector: '.recipe-card:nth-child(4)', src: mushroom, alt: 'Mushroom Soup' },
    { selector: '.recipe-card:nth-child(5)', src: pancakes, alt: 'Pancakes' },
    { selector: '.recipe-card:nth-child(6)', src: potatoes, alt: 'Potatoes' },
  ];

  imageMapping.forEach(({ selector, src, alt }) => {
    const card = document.querySelector(selector);
    if (card) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.classList.add('recipe-image');
      card.appendChild(img);
    } else {
      console.error(`Kortelė su selektoriumi "${selector}" nerasta.`);
    }
  });
}

// Funkcija, nustatanti hero paveikslėlį
export function setupHeroImage() {
  const heroImg = document.getElementById('hero-img'); // Paveikslėlio elementas Hero sekcijoje
  if (heroImg) {
    heroImg.src = plateFood; // Paveikslėlio kelias
    heroImg.alt = 'Delicious Meal'; // Alternatyvus tekstas
    heroImg.classList.add('hero-image'); // Pridedame CSS klasę
  } else {
    console.error('Hero paveikslėlis nerastas.');
  }
}

// Funkcija, įdedanti nuotraukas į atsiliepimų korteles
export function setupTestimonials() {
  const testimonialMapping = [
    {
      selector: '.author-photo-container',
      src: sarahImg,
      alt: 'Sarah M.',
    },
    {
      selector: '.author-photo-container1',
      src: farellinImg,
      alt: 'Farellin J.',
    },
    {
      selector: '.about-us-section',
      src: about,
      alt: 'About',
    },
    {
      selector: '.card-body-1',
      src: community1,
      alt: 'Spaghetti Bolognese'
    },
    {
      selector: '.card-body-2',
      src: community2,
      alt: 'Roasted Chicken'
    },
    {
      selector: '.card-body-3',
      src: community3,
      alt: 'Vegetable Pot Pie'
    },
    {
      selector: '.card-body-4',
      src: community4,
      alt: 'Fresh Garden Salad'
    },
    {
      selector: '.profile-1',
      src: lady,
      alt: 'Lady Rudy'
    },
    {
      selector: '.profile-2',
      src: emily,
      alt: 'Emily Rose'
    },
    {
      selector: '.profile-3',
      src: susan,
      alt: 'Susan H'
    },
    {
      selector: '.profile-4',
      src: Lilac,
      alt: 'Lilac Laura'
    },
    {
      selector: '.download-images',
      src: iphone,
      alt: 'App Screenshot 1'
    },
    {
      selector: '.app-store',
      src: app,
      alt: 'App Store'
    },
    {
      selector: '.google-play',
      src: google,
      alt: 'Google Play'
    },
  ];
  testimonialMapping.forEach(({ selector, src, alt }) => {
    const container = document.querySelector(selector);
    if (container) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.classList.add('author-photo');
      container.appendChild(img);
    } else {
      console.error(`Testimonial konteineris su selektoriumi "${selector}" nerastas.`);
    }
  });
}