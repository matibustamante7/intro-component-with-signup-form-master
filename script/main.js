

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const errorContainer = document.querySelector('errorContainer')

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passworedError = document.getElementById('passwordError');



    if (firstName.value.length == 0) {
        console.log('nombre incorrecto');
        firstNameError.style.display = 'flex';
    } else {
        firstNameError.style.display = 'none'
        console.log('nombre valido');
    }


    if (lastName.value.length == 0) {
        lastNameError.style.display = 'flex'
    } else {
        lastNameError.style.display = 'none'
        console.log('apellido valido');
    }



    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (!regExp.test(email.value) == true) {
        emailError.style.display = 'flex';

    } else {
        emailError.style.display = 'none'
        console.log('email valido');
    }


    regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    /* 
        REQUISITOS DE PASSWORD

        Minimo 8 caracteres
        Maximo 15
        Al menos una letra mayúscula
        Al menos una letra minucula
        Al menos un dígito
        No espacios en blanco
        Al menos 1 caracter especial   

        DE PRUEBA: MatiBusta!1
    */

    if (!regexp_password.test(password.value) == true) {
        passworedError.style.display = 'flex'
    } else {
        passworedError.style.display = 'none'
        console.log('pass valido');
    }
});


