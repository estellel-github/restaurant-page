import "./css/styles.css";
import { loadStartModule } from "./startinfo";
import { loadAboutModule } from "./about";
import { loadContactModule } from "./contact";
import { loadGalleryModule } from "./gallery";
import { loadMenuModule } from "./menu";
import { loadOrderModule } from "./order";

loadStartModule();

const btnNavHome = document.querySelector("#btn-nav-home");
btnNavHome.addEventListener("click", loadStartModule);

const btnNavAbout = document.querySelector("#btn-nav-about");
btnNavAbout.addEventListener("click", loadAboutModule);

const btnNavContact = document.querySelector("#btn-nav-contact");
btnNavContact.addEventListener("click", loadContactModule);

const btnNavGallery = document.querySelector("#btn-nav-gallery");
btnNavGallery.addEventListener("click", loadGalleryModule);

const btnNavMenu = document.querySelector("#btn-nav-menu");
btnNavMenu.addEventListener("click", loadMenuModule);

const btnNavOrder = document.querySelector("#btn-nav-order");
btnNavOrder.addEventListener("click", loadOrderModule);