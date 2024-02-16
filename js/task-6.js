"use strict";

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-action="create"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const divBox = document.getElementById('boxes');
let divSize = 30;

btnCreate.addEventListener('click', btnCreateHandler);
btnDestroy.addEventListener('click', destroyBoxes);

function btnCreateHandler(event){
  if (input.value>=1&&input.value<=100) {
    destroyBoxes();
    createBoxes(input.value);
    input.value = "";
  }
}

function createBoxes(amount){
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = `${divSize}px`;
    div.style.height = `${divSize}px`;
    div.classList.add('div-box-item');
    divBox.append(div);
    divSize+=10;
  }
}

function destroyBoxes(){
  divBox.innerHTML = "";
  divSize = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




