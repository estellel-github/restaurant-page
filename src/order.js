import margheritaImg from './images/order/margherita.jpg';
import marinaraImg from './images/order/marinara.jpg';
import quattroStagioniImg from './images/order/quattro_stagioni.jpg';
import pepperoniImg from './images/order/pepperoni.jpg';
import vegetarianImg from './images/order/vegetarian.jpg';
import hawaiianImg from './images/order/hawaiian.jpg';
import diavolaImg from './images/order/diavola.jpg';
import quattroFormaggiImg from './images/order/quattro_formaggi.jpg';
import carbonaraImg from './images/order/carbonara.jpg';
import lasagnaImg from './images/order/lasagna.jpg';
import ravioliImg from './images/order/ravioli.jpg';
import caesarImg from './images/order/caesar.jpg';
import capreseImg from './images/order/caprese.jpg';

function loadOrderModule() {
    const moduleContent = document.getElementById("module-content");
    moduleContent.textContent = "";

    const topSection = document.createElement("section");
    topSection.className = "top-section";
    const h1_1 = document.createElement("h1");
    h1_1.textContent = "Pizzeria Da Nono";
    const h1_2 = document.createElement("h1");
    h1_2.textContent = "Place Your Order!";
    topSection.appendChild(h1_1);
    topSection.appendChild(h1_2);

    const mainOrder = document.createElement("main");
    mainOrder.className = "order";
    const orderGrid = document.createElement("div");
    orderGrid.className = "order-grid";

    const categories = [
        {
            name: "Pizza",
            items: [
                { name: "Margherita", ingredients: "Tomato, Mozzarella, Basil", info: "Vegetarian", price: "€8.00", img: margheritaImg },
                { name: "Marinara", ingredients: "Tomato, Garlic, Oregano", info: "Vegan", price: "€7.50", img: marinaraImg },
                { name: "Quattro Stagioni", ingredients: "Tomato, Mozzarella, Artichokes, Ham, Mushrooms, Olives", info: "", price: "€10.50", img: quattroStagioniImg },
                { name: "Pepperoni", ingredients: "Tomato, Mozzarella, Pepperoni", info: "", price: "€9.50", img: pepperoniImg },
                { name: "Vegetarian", ingredients: "Tomato, Mozzarella, Bell Peppers, Onions, Olives", info: "Vegetarian", price: "€9.00", img: vegetarianImg },
                { name: "Hawaiian", ingredients: "Tomato, Mozzarella, Ham, Pineapple", info: "", price: "€9.50", img: hawaiianImg },
                { name: "Diavola", ingredients: "Tomato, Mozzarella, Spicy Salami", info: "", price: "€10.00", img: diavolaImg },
                { name: "Four Cheese", ingredients: "Mozzarella, Gorgonzola, Parmesan, Goat Cheese", info: "Vegetarian", price: "€11.00", img: quattroFormaggiImg }
            ]
        },
        {
            name: "Pasta",
            items: [
                { name: "Spaghetti Carbonara", ingredients: "Eggs, Pecorino Cheese, Guanciale, Black Pepper", info: "", price: "€11.00", img: carbonaraImg },
                { name: "Lasagna", ingredients: "Layers of Pasta, Bolognese Sauce, Béchamel, Parmesan", info: "", price: "€12.00", img: lasagnaImg },
                { name: "Ravioli", ingredients: "Stuffed Pasta with Ricotta and Spinach", info: "Vegetarian", price: "€11.50", img: ravioliImg }
            ]
        },
        {
            name: "Salads",
            items: [
                { name: "Caesar Salad", ingredients: "Romaine Lettuce, Croutons, Parmesan, Caesar Dressing", info: "", price: "€7.50", img: caesarImg },
                { name: "Caprese Salad", ingredients: "Tomatoes, Mozzarella, Basil, Olive Oil", info: "Vegetarian", price: "€8.00", img: capreseImg }
            ]
        }
    ];

    categories.forEach(category => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = category.name;
        orderGrid.appendChild(categoryTitle);

        const categoryContainer = document.createElement("div");
        categoryContainer.className = "order-category";

        category.items.forEach(item => {
            const itemContainer = document.createElement("div");
            itemContainer.className = "order-item";

            const itemImage = document.createElement("img");
            itemImage.src = item.img;
            itemImage.alt = `${item.name} ${category.name}`;
            itemContainer.appendChild(itemImage);

            const itemName = document.createElement("div");
            itemName.className = "item-name";
            itemName.textContent = item.name;
            itemContainer.appendChild(itemName);

            const itemIngredients = document.createElement("div");
            itemIngredients.className = "item-ingredients";
            itemIngredients.textContent = item.ingredients;
            itemContainer.appendChild(itemIngredients);

            if (item.info) {
                const itemInfo = document.createElement("div");
                itemInfo.className = "item-info";
                itemInfo.textContent = item.info;
                itemContainer.appendChild(itemInfo);
            }

            const itemPrice = document.createElement("div");
            itemPrice.className = "item-price";
            itemPrice.textContent = item.price;
            itemContainer.appendChild(itemPrice);

            const addButton = document.createElement("button");
            addButton.className = "add-to-cart";
            addButton.textContent = "+";
            itemContainer.appendChild(addButton);

            categoryContainer.appendChild(itemContainer);
        });

        orderGrid.appendChild(categoryContainer);
    });

    mainOrder.appendChild(orderGrid);
    moduleContent.appendChild(topSection);
    moduleContent.appendChild(mainOrder);
}

export { loadOrderModule };