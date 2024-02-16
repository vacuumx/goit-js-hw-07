"use strict";

const form = document.querySelector('form.login-form');

function formHandler(event){
    event.preventDefault();
    const data = {
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim()
    }
    if (data.email.length===0 || data.password.length===0) {
        alert("All form fields must be filled in");
    }
console.log(data);
form.reset();
}

form.addEventListener('submit', formHandler);

