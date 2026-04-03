import aboutPicture from "./about.jpeg";

export function aboutLoad() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const aboutPage = document.createElement('div')
  aboutPage.classList.add('about')
  content.appendChild(aboutPage)


  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "О нас";

  aboutPage.appendChild(aboutTitle);

  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add('about-main')
  aboutPage.appendChild(aboutDiv);

    const aboutPic = document.createElement('img')
    aboutPic.src = aboutPicture;
    aboutDiv.appendChild(aboutPic)


  const aboutUs = document.createElement("p");
  aboutUs.innerHTML =
    "Ресторан «local bistro» — это пространство, где безупречный сервис встречается с высокой гастрономией. <br><br>Мы открылись в 2020 году с одной целью: создать место, где каждый гость чувствует себя особенным. Никакой суеты. Никаких компромиссов. Только вы, ваш вечер и еда, которую готовят с душой. <br><br>Наша команда — это профессионалы, прошедшие стажировки в ресторанах Европы и Азии. Шеф-повар Влфдимир Буршман лично контролирует каждый этап: от приемки продуктов до подачи блюда. Официанты знают карту вин наизусть и незаметно, но вовремя наполнят ваш бокал.<br><br>Интерьер «local bistro» — это элегантный минимализм с авторскими деталями: мраморные столешницы, мягкий приглушённый свет, живой камин в VIP-зоне. Каждый столик расположен так, чтобы вы не слышали разговоры соседей.<br><br>Мы не работаем «на поток». Количество посадок в вечер ограничено, потому что каждый гость заслуживает времени и внимания. Забронировать столик можно по телефону или через форму на сайте.<br><br>«local bistro» — для тех, кто привык к лучшему.";
  aboutDiv.appendChild(aboutUs);
}
