// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy iMpoRt stylów
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map((galleryItem) => `
<a class="gallery__item" href="${galleryItem.original}">
  <img class="gallery__image" src="${galleryItem.preview}" 
  alt="${galleryItem.description}" title = "${galleryItem.description}"/>
</a>`).join("");

gallery.innerHTML = galleryItem;

new SimpleLightbox('.gallery a', { captionDelay: 250 });

console.log(galleryItems);
