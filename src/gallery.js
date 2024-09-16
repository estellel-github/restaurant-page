import galleryImage1 from "./images/gallery/gallery_1.jpg";
import galleryImage2 from "./images/gallery/gallery_2.jpg";
import galleryImage3 from "./images/gallery/gallery_3.jpg";
import galleryImage4 from "./images/gallery/gallery_4.jpg";
import galleryImage5 from "./images/gallery/gallery_5.jpg";
import galleryImage6 from "./images/gallery/gallery_6.jpg";
import galleryImage7 from "./images/gallery/gallery_7.jpg";
import galleryImage8 from "./images/gallery/gallery_8.jpg";
import galleryImage9 from "./images/gallery/gallery_9.jpg";
import galleryImage10 from "./images/gallery/gallery_10.jpg";
import galleryImage11 from "./images/gallery/gallery_11.jpg";
import galleryImage12 from "./images/gallery/gallery_12.jpg";
import galleryImage13 from "./images/gallery/gallery_13.jpg";
import galleryImage14 from "./images/gallery/gallery_14.jpg";
import galleryImage15 from "./images/gallery/gallery_15.jpg";
import galleryImage16 from "./images/gallery/gallery_16.jpg";

function loadGalleryModule() {
  const moduleContentDiv = document.querySelector("#module-content");
  moduleContentDiv.textContent = "";

  const topSection = document.createElement("section");
  topSection.className = "top-section";
  const h1Pizzeria = document.createElement("h1");
  h1Pizzeria.textContent = "Pizzeria Da Nono";
  const h1Gallery = document.createElement("h1");
  h1Gallery.textContent = "Gallery";
  topSection.appendChild(h1Pizzeria);
  topSection.appendChild(h1Gallery);

  const mainGallery = document.createElement("main");
  mainGallery.className = "gallery";

  function createGalleryItem(imageSrc, altText, isPortrait = false) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = altText;
    if (isPortrait) {
      img.className = "portrait";
    }
    div.appendChild(img);
    return div;
  }
  mainGallery.appendChild(createGalleryItem(galleryImage1, "Gallery Image 1"));
  mainGallery.appendChild(createGalleryItem(galleryImage2, "Gallery Image 2"));
  mainGallery.appendChild(createGalleryItem(galleryImage3, "Gallery Image 3"));
  mainGallery.appendChild(createGalleryItem(galleryImage4, "Gallery Image 4"));
  mainGallery.appendChild(createGalleryItem(galleryImage5, "Gallery Image 5"));
  mainGallery.appendChild(
    createGalleryItem(galleryImage6, "Gallery Image 6", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage7, "Gallery Image 7", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage8, "Gallery Image 8", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage9, "Gallery Image 9", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage10, "Gallery Image 10", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage11, "Gallery Image 11", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage12, "Gallery Image 12", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage13, "Gallery Image 13", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage14, "Gallery Image 14", true)
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage15, "Gallery Image 15")
  );
  mainGallery.appendChild(
    createGalleryItem(galleryImage16, "Gallery Image 16", true)
  );

  moduleContentDiv.appendChild(topSection);
  moduleContentDiv.appendChild(mainGallery);
}

export { loadGalleryModule };