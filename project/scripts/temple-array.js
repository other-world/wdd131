const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Portland Oregon",
        location: "Portland, Oregon, United States",
        dedicated: "1989, August, 19",
        area: 80500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/2018/400x250/Portland-Oregon-Temple10.jpg"
      },
      {
        templeName: "Provo City Center",
        location: "Provo, Utah, USA",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
      },
      {
        templeName: "Apia Samoa",
        location: "Apaia, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/400x250/apia-samoa-temple-lds-460475-wallpaper.jpg"
      },
    // Add more temple objects here...
  ];


//const oldTemplesLink = document.getElementById(".old");
//const newTemplesLink = document.getElementById(".new");
//const largeTemplesLink = document.getElementById(".large");
//const smallTemplesLink = document.getElementById(".small");

/*largeTemplesLink.addEventListener("click", () => {
  let largeTemples = temples.filter(temple => temple.area > 10000);
  console.log("Large clicked.");
  createTempleCard(largeTemples);
});

/*oldTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => temple.dedicated < 1980);
  console.log("Old clicked.");
  createTempleCard(oldTemples);
});

newTemplesLink.addEventListener("click", () => {
  let oldTemples = temples.filter(temple => temple.dedicated >= 1980);
  console.log("New clicked.");
  createTempleCard(newTemples);
});



smallTemplesLink.addEventListener("click", () => {
  let smallTemples = temples.filter(temple => temple.area <= 10000);
  console.log("Small clicked.");
  createTempleCard(smallTemples);
});*/
const largeTemples = temples.filter(temple => temple.area > 10000);

createTempleCard(largeTemples);

function createTempleCard(filteredTemples) {
    temples.forEach(temple => {
        console.log(`Temple Area: ${temple.area}`);

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location =  document.createElement("p");
        let dedicated =  document.createElement("p");
        let size =  document.createElement("p");
        let img =  document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        size.innerHTML = `<span class="label">Area:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    });
}