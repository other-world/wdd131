const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "./images/aba-nigeria-temple-lds-273999-wallpaper.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "./images/manti-temple-768192-wallpaper.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "./images/payson-utah-temple-exterior-1416671-wallpaper.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "./images/yigo_guam_temple_2.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "./images/washington_dc_temple-exterior-2.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "./images/lima-peru-temple-evening-1075606-wallpaper.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "./images/mexico-city-temple-exterior-1518361-wallpaper.webp"
  },
  {
    templeName: "Portland Oregon",
    location: "Portland, Oregon, United States",
    dedicated: "1989, August, 19",
    area: 80500,
    imageUrl:
      "./images/Portland-Oregon-Temple10.webp"
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah, USA",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
      "./images/provo-city-center-temple-1572517-wallpaper.webp"
  },
  {
    templeName: "Apia Samoa",
    location: "Apaia, Samoa",
    dedicated: "1983, August, 5",
    area: 18691,
    imageUrl:
      "./images/apia-samoa-temple-lds-460475-wallpaper.webp"
  },
  {
    templeName: "St. George",
    location: "St. George, Utah, USA",
    dedicated: "1877, April, 6",
    area: 143969,
    imageUrl:
      "./images/st-george-temple-761089-wallpaper.webp"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
      "./images/slctemple7.webp"
  },
  // Add more temple objects here...
];

const homeTemplesLink = document.querySelector("#home");
const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");
const templeGrid = document.querySelector(".temple-grid");
createTempleCard(temples);


homeTemplesLink.addEventListener("click", () => {
  //Home is the default and shows all the temples in the array. But it also needs an event listener.
  createTempleCard(temples);
});

oldTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temples => Number(temples.dedicated.substring(0, 4)) < 1900);
  createTempleCard(oldTemples);
});

newTemplesLink.addEventListener("click", () => {
  let newTemples = temples.filter(temples => Number(temples.dedicated.substring(0, 4)) >= 1900);
  createTempleCard(newTemples);
});

largeTemplesLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 10000);
  createTempleCard(largeTemples);
});

smallTemplesLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area <= 10000);
  createTempleCard(smallTemples);
});

function createTempleCard(filteredTemples) {
  templeGrid.innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let size = document.createElement("p");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    size.innerHTML = `<span class="label">Area:</span> ${temple.area} square ft`;

    let img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("width", "250");
    img.setAttribute("height", "156");
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    card.appendChild(img);

    templeGrid.appendChild(card);
  });
}