"use strict";

const body = document.querySelector('body');
const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

button.addEventListener('click', buttonHandler);


function buttonHandler(event){
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;


}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
