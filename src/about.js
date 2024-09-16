import nonoPizzaioloImage from './images/nono_pizzaiolo.jpg';
import danonoIndoorsImage from './images/danono_indoors.jpg';

function loadAboutModule() {
  const moduleContent = document.querySelector("#module-content");
  moduleContent.textContent = "";

  const topSection = document.createElement("section");
  topSection.className = "top-section";
  const h1Pizzeria = document.createElement("h1");
  h1Pizzeria.textContent = "Pizzeria Da Nono";
  const h1About = document.createElement("h1");
  h1About.textContent = "About Us";

  topSection.appendChild(h1Pizzeria);
  topSection.appendChild(h1About);

  const mainAbout = document.createElement("main");
  mainAbout.className = "about";
  const aboutContentSection = document.createElement("section");
  aboutContentSection.className = "about-content";

  const aboutContainer = document.createElement("div");
  aboutContainer.className = "about-container";
  const aboutSideContainer1 = document.createElement("div");
  aboutSideContainer1.className = "about-side-container";
  const aboutImage1 = document.createElement("img");
  aboutImage1.className = "about-img";
  aboutImage1.src = nonoPizzaioloImage;
  aboutImage1.alt =
    "A photograph of Nono, our chef pizzaiolo, in their kitchen.";

  aboutSideContainer1.appendChild(aboutImage1);
  aboutContainer.appendChild(aboutSideContainer1);

  const p1 = document.createElement("p");
  p1.textContent =
    "Founded by the innovative and passionate chef Nono in 2018, our restaurant is a vibrant blend of traditional cuisine and modern aesthetics. Nono envisioned a place where the rich flavors of traditional recipes could be enjoyed in a contemporary and lively setting.";
  aboutContainer.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent =
    "From the moment you step inside, you are greeted by a dynamic atmosphere that is both welcoming and exhilarating. Our eclectic decor features a mix of kitsch and retro furniture, complemented by striking pieces of art that add a unique flair to the dining experience. The pulsating beats of electro music set the tone, creating an energetic backdrop for memorable meals.";
  const p3 = document.createElement("p");
  p3.textContent =
    "At the heart of our restaurant is a commitment to culinary excellence. Nono's dedication to using fresh, high-quality ingredients and time-honored cooking techniques ensures that each dish is a celebration of tradition. Whether you are savoring a classic favorite or exploring new flavors, our menu offers something for every palate.";

  aboutContentSection.appendChild(aboutContainer);
  aboutContentSection.appendChild(p2);
  aboutContentSection.appendChild(p3);

  const aboutContainer2 = document.createElement("div");
  aboutContainer2.className = "about-container";
  const p4 = document.createElement("p");
  p4.textContent =
    "Our space is designed to be more than just a place to eat; it is a community hub where people come together to enjoy great food, art, and music. We take pride in fostering an inclusive environment where everyone feels at home, and where the spirit of creativity and innovation thrives.";
  aboutContainer2.appendChild(p4);

  const aboutSideContainer2 = document.createElement("div");
  aboutSideContainer2.className = "about-side-container";
  const aboutImage2 = document.createElement("img");
  aboutImage2.className = "about-img";
  aboutImage2.src = danonoIndoorsImage;
  aboutImage2.alt =
    "A photograph of Da Nono's indoor dining area showing tables and booths.";
  aboutSideContainer2.appendChild(aboutImage2);
  aboutContainer2.appendChild(aboutSideContainer2);

  const p5 = document.createElement("p");
  p5.textContent =
    "Join us for an unforgettable dining experience that bridges the gap between the old and the new. At our restaurant, tradition meets trend, and every visit promises to be a feast for the senses. Thank you for being a part of our journey, and we look forward to welcoming you soon.";

  aboutContentSection.appendChild(aboutContainer2);
  aboutContentSection.appendChild(p5);
  mainAbout.appendChild(aboutContentSection);

  moduleContent.appendChild(topSection);
  moduleContent.appendChild(mainAbout);
}

export { loadAboutModule };
