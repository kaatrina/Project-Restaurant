export function menuLoad() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuArea = document.createElement("div");
  menuArea.classList.add("menuArea");
  content.appendChild(menuArea);

  const textMenu = document.createElement("div");
  textMenu.classList.add("textMenu");

  menuArea.appendChild(textMenu);

  const nameMenu = document.createElement("div");
  nameMenu.classList.add("nameMenu");

  textMenu.appendChild(nameMenu);

  const nameMenuH = document.createElement("h2");

  nameMenuH.textContent = "Menu";
  nameMenu.appendChild(nameMenuH);
  const nameMenuP = document.createElement("h3");

  nameMenuP.textContent = "local bistro";
  nameMenu.appendChild(nameMenuP);

  const apperetive = document.createElement("div");
  apperetive.classList.add("menu-item");

  textMenu.appendChild(apperetive);

  const saladTitle = document.createElement('h4')
  saladTitle.textContent = 'Салаты'
  apperetive.appendChild(saladTitle)

  const salad = document.createElement("ul");
  apperetive.appendChild(salad);



  const salads = [
    "Цезарь с креветками",
    "Салат с утиной грудкой",
    "Греческий",
    "Теплый с баклажанами",
  ];

  for (const salad_item of salads) {
    const li_item = document.createElement("li");
    li_item.textContent = salad_item;
    salad.appendChild(li_item);
  }


  const soupTitle = document.createElement('h4')
  soupTitle.textContent = 'Супы'
  apperetive.appendChild(soupTitle)

  const soup = document.createElement("ul");
  apperetive.appendChild(soup);

  const soups = [
    "Томатный с морепродуктами",
    "Грибной крем-суп",
    "Гаспачо"
  ];

  for (const soup_item of soups) {
    const li_itemSoup = document.createElement("li");
    li_itemSoup.textContent = soup_item;
    soup.appendChild(li_itemSoup);
  }


  const hotTitle = document.createElement('h4')
  hotTitle.textContent = 'Горячее'
  apperetive.appendChild(hotTitle)

  const hot = document.createElement("ul");
  apperetive.appendChild(hot);

  const hots = [
    "Рибай на гриле",
    "Паста Карбонара",
    "Утиная ножка конфи",
    "Лосось на углях",
    "Рис с овощами и тофу"
  ];

  for (const hot_item of hots) {
    const li_itemHot = document.createElement("li");
    li_itemHot.textContent = hot_item;
    hot.appendChild(li_itemHot);
  }

  const cakeTitle = document.createElement('h4')
  cakeTitle.textContent = 'Десерты'
  apperetive.appendChild(cakeTitle)

  const cake = document.createElement("ul");
  apperetive.appendChild(cake);

  const cakes = [
    "Тирамису",
    "Шоколадный фондан",
    "Чизкейк Нью-Йорк"
  ];

  for (const cake_item of cakes) {
    const li_itemCake = document.createElement("li");
    li_itemCake.textContent = cake_item;
    cake.appendChild(li_itemCake);
  }
}
