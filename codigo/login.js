

const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        let pwFields =
            eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach((password) => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        });
    });
});

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    });
});

document.getElementById("btn-ingresa").addEventListener("click", function () {
    // Obtener el valor ingresado por el usuario para el correo electrónico
    var email = document.querySelector('.input[type="email"]').value;
    var recordar = document.getElementById("recordarMail").checked;

    // Guardar el correo electrónico del usuario en localStorage si se ha marcado la casilla 'recordar'
    if (recordar) {
        localStorage.setItem("email", email);
        localStorage.setItem("recordar", recordar);
    } else {
        // Limpiar los datos del correo electrónico si la casilla 'recordar' no está marcada
        localStorage.removeItem("email");
        localStorage.removeItem("recordar");
    }

});

// Comprobar si hay datos guardados en localStorage al cargar la página
window.addEventListener("load", function () {
    var email = localStorage.getItem("email");
    var recordar = localStorage.getItem("recordar");

    if (email && recordar === "true") {
        // Restaurar el valor del correo electrónico en el formulario si se ha guardado previamente
        document.querySelector('.input[type="email"]').value = email;
        document.getElementById("recordarMail").checked = true;
    }
});

// -  Ejecutar cuando se aprete el botton submit
// 1. Comprobar que el primer campo no este vacio
// 2. Comprobar que la contraseña:
//    - Tiene mayusculas 
//    - Tiene minusculas
//    - Tiene caracter especial
//    - Tiene numeros
//    - No RegExp

const submit = document.querySelector("#ingresa");
const submit2 = document.querySelector("#registrate");

const emitirError = validacion => validacion()? alert(validacion()) : document.location.href = "index.html";

const comprobarLimite = (cadena, inicio, final) => !cadena.split("").some(letra => letra >= inicio && final >= letra);

const validarNombre = nombre => nombre == ""? " - Ingrese nombre de usuario\n" : "";
const validarConfirmacion = (confirmacion, clave) => confirmacion != clave? " - Las claves no corresponden": "";
function validarClave(clave) {
    let mensaje = "";
    if (clave.length < 12)
        mensaje += " - Ingrese una clave con minimo 12 caracteres\n";
    if (comprobarLimite(clave, "A", "Z"))
        mensaje += " - Ingrese una clave con una mayuscula\n";
    if (comprobarLimite(clave, "a", "z"))
        mensaje += " - Ingrese una clave con una minuscula\n";
    if (!`@#_."[]{}`.split("").some(caracter => clave.includes(caracter)))
        mensaje += " - Ingrese una clave con un caracter especial\n";
    if (comprobarLimite(clave, "0", "9"))
        mensaje += " - Ingrese una clave con un numero\n";
    return mensaje;
}


let validarIngreso = submit => () => {
    let { value: nombre } = document.querySelector(".nombre-" + submit);
    let { value: clave } = document.querySelector(".clave-" + submit);
    return validarNombre(nombre) + validarClave(clave);
}

const validarRegistro = submit => () => {
    let { value: confirmacion } = document.querySelector(".confirmacion");
    let { value: clave } = document.querySelector(".clave-" + submit);
    return validarIngreso(submit)() + validarConfirmacion(confirmacion, clave);
}

const validar = submit => () => emitirError({ ingreso: validarIngreso(submit), registro: validarRegistro(submit)}[submit]);

submit.addEventListener("click", validar("ingreso"));
submit2.addEventListener("click", validar("registro"))