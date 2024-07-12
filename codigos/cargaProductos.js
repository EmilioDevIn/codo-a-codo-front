/*
    FUNCION
    - Cargar de forma dinamica los productos desde el BACKEND

    PAGINAS
    1. index.html
    2. accesorios-perro.html
    3. alimeentos__perros.html
    4. accesorios-gatos.html
    5. alimeentos__gatos.html
*/

import { ConfiguracionHTTP, Aplicacion } from "./_clases.js";
const { crateApp } = Vue;
const { estado, api } = new Aplicacion();

// index.html
createApp({
    data() {
        return {
            url: api.url,
            datos: []
        }
    },
    methods: {
        leer() {
            fetch(this.url + "/productos/leer")
                .then(respuesta => respuesta.json())
                .then(datos => this.datos = datos.filter((dato, i) => i < 8));
            alert("work")
        },
        reducirInventario(datos) {
            fetch(this.url + "/productos/modificar", new ConfiguracionHTTP("POST", datos).json())
                .then(respuesta => this.leer());
        }
    },
    created() {
        this.leer();
    }
}).mount("#carrusel")

// paginas de productos
createApp({

}).mount("#productos")