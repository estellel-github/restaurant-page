import { loadOrderModule } from "./order";

const loadStartModule = () => {
  const moduleContentDiv = document.querySelector('#module-content');
  moduleContentDiv.textContent = "";
  
  const section = document.createElement("section");
  section.className = "hero";

  const h1 = document.createElement("h1");
  h1.textContent = "Pizzeria Da Nono";
  section.appendChild(h1);

  const button = document.createElement('button');
  button.className = 'order-button';
  const anchor = document.createElement('a');
  anchor.textContent = 'Order Now';
  button.appendChild(anchor);
  button.addEventListener("click", loadOrderModule);
  section.appendChild(button);

  section.appendChild(button);

  const main = document.createElement("main");
  main.className = "info";

  const h2Location = document.createElement("h2");
  h2Location.textContent = "Our Location";
  main.appendChild(h2Location);

  const pLocation = document.createElement("p");
  pLocation.textContent = "Rosenthalerplatz, 10119 Berlin";
  main.appendChild(pLocation);

  const h2Hours = document.createElement("h2");
  h2Hours.textContent = "Opening Hours";
  main.appendChild(h2Hours);

  const pWeek = document.createElement('p');
  pWeek.textContent = 'Monday - Friday: 11:00 AM - 10:00 PM';
  main.appendChild(pWeek);

  const pWeekend = document.createElement('p');
  pWeekend.textContent = 'Saturday - Sunday: 12:00 PM - 11:00 PM';
  main.appendChild(pWeekend);

  moduleContentDiv.appendChild(section);
  moduleContentDiv.appendChild(main);
}

export { loadStartModule };