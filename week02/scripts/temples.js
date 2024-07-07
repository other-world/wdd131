const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
	// menu.classList.toggle('show');
	// layout.classList.toggle('show');
	toggleMenuButton();
});

function toggleMenuButton() {
	menu.classList.toggle('show');
	layout.classList.toggle('show');
};



//console.log("Hello World");
//document = "getdates.js";
let yr = new Date().getFullYear();
let lastModified = document.lastModified;
let author = "Jamie Cummings";
let place = "Utah, USA";

// \u00A9 is the unicode for the copywrite symbol
document.getElementById("copywrite").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;
document.getElementById("modified").innerHTML = `Last Modified ${lastModified}`;