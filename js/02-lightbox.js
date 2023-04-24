import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(galleryItems);
const list = document.querySelector(".gallery");

const cardsMarkup = createImg(galleryItems);
list.insertAdjacentHTML("beforeend", cardsMarkup);

function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
         </li>
      `;
    })
    .join("");
}

  var lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    captionsData: "alt",
  });


