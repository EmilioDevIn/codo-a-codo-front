const comprobarLimite = (cadena, inicio, final) => !cadena.split("").some(letra => letra >= inicio && final >= letra);

const validarConfirmacion = (confirmacion, clave) => confirmacion != clave? " - Las claves no corresponden": "";

const validarNombre = nombre => nombre == ""? " - Ingrese nombre de usuario\n" : "";

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

const { createApp } = Vue; 

createApp({
    data() {
        return {
            url: "https://emiliodevin2.pythonanywhere.com",
            nombre: "",
            clave: "",
            confirmacion: ""
        }
    },
    methods: {
        validar() {
            let mensajeClave = validarClave(this.clave);
            let mensajeConfirmacion = validarConfirmacion(this.confirmacion, this.clave);
            let mensajeNombre = validarNombre(this.nombre);
            let mensaje = mensajeNombre + mensajeClave + mensajeConfirmacion;
            this.valido = !(mensaje)
            if(!this.valido)
                alert(mensaje);
        },
        datos() {
            return {
                nombre: this.nombre,
                clave: this.clave,
                esAdministrador: false,
                imagen: "no-imagen"
            }
        },
        httpConfig(method, datos) {
            return {
                body: JSON.stringify(datos),
                method: method,
                headers: { "Content-type": "application/json" }
            }
        },
        registrar() {
            this.validar()
            if(this.valido)
                fetch(this.url + "/usuarios/crear", this.httpConfig("POST", this.datos()))
                    .then(respuesta => this.iniciar())
        },
        iniciar() {    
            fetch(this.url + "/sesiones/iniciar", this.httpConfig("POST", this.datos()))
                .then(respuesta => respuesta.json())
                .then(datos => {
                    sessionStorage.setItem("codigoSesion", datos.codigo_cliente)
                    window.location.href = "./index.html";
                });
        }
    },
    created() {

    }
}).mount("#formulario");

