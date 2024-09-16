function loadMenuModule() {
  const moduleContent = document.querySelector("#module-content");
  moduleContent.textContent = "";

  const topSection = document.createElement("section");
  topSection.className = "top-section";
  const h1Pizzeria = document.createElement("h1");
  h1Pizzeria.textContent = "Pizzeria Da Nono";
  const h1Menu = document.createElement("h1");
  h1Menu.textContent = "Our Menu";
  topSection.appendChild(h1Pizzeria);
  topSection.appendChild(h1Menu);

  const mainMenu = document.createElement("main");
  mainMenu.className = "menu";

  const menuData = [
    {
      title: "Pizza",
      items: [
        {
          name: "Margherita",
          ingredients: "Tomato, Mozzarella, Basil",
          info: "Vegetarian",
          price: "€8.00",
        },
        {
          name: "Marinara",
          ingredients: "Tomato, Garlic, Oregano",
          info: "Vegan",
          price: "€7.50",
        },
        {
          name: "Quattro Stagioni",
          ingredients: "Tomato, Mozzarella, Artichokes, Ham, Mushrooms, Olives",
          info: "",
          price: "€10.50",
        },
        {
          name: "Prosciutto e Funghi",
          ingredients: "Tomato, Mozzarella, Ham, Mushrooms",
          info: "",
          price: "€9.50",
        },
        {
          name: "Diavola",
          ingredients: "Tomato, Mozzarella, Spicy Salami",
          info: "Spicy",
          price: "€9.00",
        },
        {
          name: "Quattro Formaggi",
          ingredients: "Mozzarella, Gorgonzola, Parmesan, Fontina",
          info: "Vegetarian",
          price: "€10.00",
        },
        {
          name: "Vegetariana",
          ingredients: "Tomato, Mozzarella, Grilled Vegetables",
          info: "Vegetarian",
          price: "€9.00",
        },
        {
          name: "Capricciosa",
          ingredients:
            "Tomato, Mozzarella, Artichokes, Ham, Mushrooms, Olives, Egg",
          info: "",
          price: "€11.00",
        },
      ],
    },
    {
      title: "Pasta",
      items: [
        {
          name: "Spaghetti Carbonara",
          ingredients: "Eggs, Pecorino Cheese, Guanciale, Black Pepper",
          info: "",
          price: "€11.00",
        },
        {
          name: "Lasagna",
          ingredients: "Layers of Pasta, Bolognese Sauce, Béchamel, Parmesan",
          info: "",
          price: "€12.00",
        },
        {
          name: "Ravioli",
          ingredients: "Stuffed Pasta with Ricotta and Spinach",
          info: "Vegetarian",
          price: "€11.50",
        },
      ],
    },
    {
      title: "Salads",
      items: [
        {
          name: "Caesar Salad",
          ingredients: "Romaine Lettuce, Croutons, Parmesan, Caesar Dressing",
          info: "",
          price: "€7.50",
        },
        {
          name: "Caprese Salad",
          ingredients: "Tomatoes, Mozzarella, Basil, Olive Oil",
          info: "Vegetarian",
          price: "€8.00",
        },
      ],
    },
    {
      title: "Wine",
      items: [
        {
          name: "Chianti",
          ingredients: "Red Wine from Tuscany",
          info: "",
          price: "€5.00/glass, €20.00/bottle",
        },
        {
          name: "Barolo",
          ingredients: "Red Wine from Piedmont",
          info: "",
          price: "€6.00/glass, €25.00/bottle",
        },
        {
          name: "Prosecco",
          ingredients: "Sparkling White Wine",
          info: "",
          price: "€4.50/glass, €18.00/bottle",
        },
        {
          name: "Pinot Grigio",
          ingredients: "White Wine from Veneto",
          info: "",
          price: "€5.00/glass, €20.00/bottle",
        },
        {
          name: "Montepulciano",
          ingredients: "Red Wine from Abruzzo",
          info: "",
          price: "€5.50/glass, €22.00/bottle",
        },
      ],
    },
    {
      title: "Soft Drinks",
      items: [
        { name: "Coca-Cola", ingredients: "", info: "", price: "€2.50" },
        { name: "Sprite", ingredients: "", info: "", price: "€2.50" },
        { name: "Fanta", ingredients: "", info: "", price: "€2.50" },
        { name: "Mineral Water", ingredients: "", info: "", price: "€2.00" },
        { name: "Orange Juice", ingredients: "", info: "", price: "€3.00" },
      ],
    },
  ];

  menuData.forEach((category) => {
    const h2 = document.createElement("h2");
    h2.textContent = category.title;
    mainMenu.appendChild(h2);
    const menuCategory = document.createElement("div");
    menuCategory.className = "menu-category";

    category.items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      const itemName = document.createElement("div");
      itemName.className = "item-name";
      itemName.textContent = item.name;

      const itemIngredients = document.createElement("div");
      itemIngredients.className = "item-ingredients";
      itemIngredients.textContent = item.ingredients;

      const itemInfo = document.createElement("div");
      itemInfo.className = "item-info";
      itemInfo.textContent = item.info;

      const itemPrice = document.createElement("div");
      itemPrice.className = "item-price";
      itemPrice.textContent = item.price;

      menuItem.appendChild(itemName);
      menuItem.appendChild(itemIngredients);
      menuItem.appendChild(itemInfo);
      menuItem.appendChild(itemPrice);
      menuCategory.appendChild(menuItem);
    });

    mainMenu.appendChild(menuCategory);
  });

  moduleContent.appendChild(topSection);
  moduleContent.appendChild(mainMenu);
}

export { loadMenuModule };
