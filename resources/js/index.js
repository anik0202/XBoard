import { magazines } from "../data/magazines.js";
console.log(magazines);

const accordians = document.getElementById("accordians");

const api = "https://api.rss2json.com/v1/api.json?rss_url=";

magazines.map((url, index) => {
  fetch(api + url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const carouselContentId = `carousel${index + 1}Content`;
      const carouselInner = document.getElementById(carouselContentId);

      //looping through the links in the data array
      data.items.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        3;
        carouselItem.className = `carousel-item ${index == 0 ? "active" : ""}`;

        carouselItem.innerHTML = `
        <div class="card">
          <a href=${item.link}>
            <img src="${
              item.enclosure.link
            }" class="card-img-top d-block" alt="...">
            <div class="card-body">
              <h5 class="carsd-title">${item.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${
                item.author
              } &#x2022 ${new Date(item.pubDate).toLocaleDateString()}</h6>
              <p class="card-text">${item.description}</p>
            </div>
          </a>
        </div>`;

        carouselInner.appendChild(carouselItem);
      });
    })
    .catch((err) => console.error("Error while fetching data: " + err));
});
