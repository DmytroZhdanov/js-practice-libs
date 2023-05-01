import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    image => `<li class="gallery__item" style="list-style: none">
      <a class="gallery__link" href="${image.original}">
        <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
      </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

let SimpleLightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
