import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const cardsMarkup = createImg(galleryItems);
list.insertAdjacentHTML("beforeend", cardsMarkup);

function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
      />
      </a>
    </li>
    `;
    })
    .join("");
}

list.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  list.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });

  console.log(event.target.dataset.source);
}
