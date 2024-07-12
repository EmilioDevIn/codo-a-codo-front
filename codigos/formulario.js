import { AccionHTTP, Producto } from "./definicion.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            url: "http://127.0.0.1:5000",
            accionHTTP: null,
            accion: null,
            model: null,
            activo: true
        }
    },
    methods: {
        establecerAccion() {
            if(this.accionHTTP.accion == "CREAR")
                this.accion = "Creando";
            if(this.accionHTTP.accion == "EDITAR")
                this.accion = "Editando";
        },
        generarCampos() {

        },
        confirmar() {
            if(this.activo) {
                this.activo = false;
                const options = {
                    method: 'POST',
                    'body': JSON.stringify({
                        nombre: this.model.nombre,
                        precio: this.model.precio,
                        descripcion: this.model.descripcion,
                        inventario: this.model.inventario,
                        imagen: this.model.imagen
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer tu_token_aqui',
                        'X-Custom-Header': 'valor personalizado'
                    }
                }
                fetch(this.url + "/" + this.accionHTTP.ruta + "/crear", options)
                    .then(respuesta => {
                        window.location.href = "../administracion.html";
                })
            }
        }
    },
    created() {
        this.accionHTTP = AccionHTTP.parse(sessionStorage.getItem("accionHTTP"));
        console.log(this.accionHTTP);
        this.model = new this.accionHTTP.plantilla()
        this.establecerAccion();
    }
}).mount("#app");