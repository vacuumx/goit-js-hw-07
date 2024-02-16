"use strict";

const input = document.getElementById('name-input');
const span = document.getElementById('name-output');


function inputHandler(event){
    if(event.target.value.trim().length === 0){
        span.textContent = "Anonymous";
    } else {
        span.textContent = event.target.value.trim();
    }
}


input.addEventListener('input', inputHandler);


