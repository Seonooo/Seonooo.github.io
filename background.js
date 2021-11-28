const images = ["0.jpg", "1.jpg", "2.jpg"];
const choose = images[Math.floor(Math.random()*images.length)];

const bgI = document.createElement("img");

bgI.scr = `img/${choose}`;
document.body.appendChild(bgI);