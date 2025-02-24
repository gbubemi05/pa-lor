const btn = document.querySelector(".palette-btn");

const btnPositive = document.querySelector(".positive-btn");
const btnNegative = document.querySelector(".negative-btn");
const paletteDiv = document.querySelector(".palette");

btnPositive.addEventListener("click", function () {
  const html = `<div class="color-box"></div>`;
  paletteDiv.insertAdjacentHTML("beforeend", html);
});
function getRandomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
console.log(getRandomRGB);
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}
console.log(rgbToHex);
function getRandomHex() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return rgbToHex(red, green, blue);
}

btn.addEventListener("click", function () {
  // Select all divs with class "color-box"
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach((div) => {
    const hexColor = getRandomHex();
    div.style.backgroundColor = hexColor;
    div.textContent = hexColor; // Add the hex code as text
  });
});

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}
