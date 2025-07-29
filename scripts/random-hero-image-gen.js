// Not in use as of 27/7/25
// I decided that the all monochrome images on the home page looks awesome.

const heroImageContainer = document.getElementById("hero-image-container");

const images = [
    "bowie.png",
    "jimi-hendrix.png"
];

const randImage = images[Math.floor(Math.random() * images.length)];

heroImageContainer.innerHTML = `
<img src="images/${randImage}" class="d-block mx-lg-auto img-fluid fade-in-down" id="hero-img" width="700" height="500"> 
`