const btn = document.querySelector(".palette-btn");
const popUp = document.querySelector(".pop-up");
const btnPositive = document.querySelector(".positive-btn");
const btnNegative = document.querySelector(".negative-btn");
const paletteDiv = document.querySelector(".palette");
const thisYear = document.querySelector(".current-year");
const maxColorBoxes = 10;
const minColorBoxes = 2;
btnPositive.addEventListener("click", function () {
  const colorBoxes = document.querySelectorAll(".color-box");
  if (colorBoxes.length < maxColorBoxes) {
    const html = `<div class="color-box"></div>`;
    paletteDiv.insertAdjacentHTML("beforeend", html);
  } else {
    popUp.textContent = "you can only use 10 colors ";
    popUp.style.opacity = "1";
    setTimeout(function () {
      popUp.style.opacity = "0";
      popUp.textContent = popText; // Hide the div after 3 seconds
    }, 3000);
  }
});

btnNegative.addEventListener("click", function () {
  remoneChild;
});
// btnPositive.addEventListener('click', function(){
//   const html =`<div class="color-box"></div>`
//   paletteDiv.
// })
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
    div.addEventListener("click", function () {
      copyToClipboard(hexColor);
    });
  });
});

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
      // popUp.textContent = "you have reached the maximum number of colors ";
      popUp.textContent = "color copied to clipboard";
      popUp.style.opacity = "1";
      setTimeout(function () {
        popUp.style.opacity = "0"; // Hide the div after 3 seconds
      }, 3000);
    })
    .catch((err) => {
      console.error("Could not copy text: ", err);
    });
}

const getFullYear = new Date().getFullYear();
console.log(getFullYear);
thisYear.textContent = getFullYear;
