
import odinImage from "./main.jpg";

export function pageLoad() {
  const content = document.getElementById("content");
  content.innerHTML = '';


  const logo = document.createElement('div')
  logo.classList.add('logo')
  content.appendChild(logo)

  const name_logo = document.createElement('h1')
  name_logo.textContent = 'local bistro'

  name_logo.classList.add('name_logo')

  logo.appendChild(name_logo)


  const description = document.createElement('div')
  description.classList.add('desc')
  content.appendChild(description)

  const textArea = document.createElement("p");
  textArea.textContent ='В центре шумного города есть место, где время замедляется. Ресторан «local bistro» — это не просто ужин. Это путешествие по вкусам, собранное шеф-поваром Владимиром Буршманом как дорожная карта лучших продуктов с локальных ферм и итальянских рынков. Мы не гонимся за модой. Мы создаём классику. В меню — выдержанные стейки из мраморной говядины австралийского откорма, домашняя паста, которую раскатывают вручную каждое утро, и соусы, рецепты которых шеф вёз из поездок по Европе.'
  description.appendChild(textArea);
}
