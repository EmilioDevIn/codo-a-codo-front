

const { createApp } = Vue;


createApp({
    data() {
        return {
            url: "https://emiliodevin2.pythonanywhere.com",
            ruta: "productos",
            datos: [],
            cargando: false,
            rutaActiva: {
                productos: "selected",
                usuarios: "",
                sesiones: ""
            },
            eliminados: []
        };
    },
    methods: {
        establecerRutaActiva(ruta) {
            this.rutaActiva.productos = "";
            this.rutaActiva.usuarios = "";
            this.rutaActiva.sesiones = "";
            this.rutaActiva[ruta] = "selected";
        },
        establecerRuta(ruta) {
            this.establecerRutaActiva(ruta)
            this.ruta = ruta;
            this.lectura()
        },

        lectura() {
            this.cargando = true;
            fetch(this.url + "/" + this.ruta + "/leer")
            .then(respuesta => {
                    return respuesta.json()
                })
                .then(datos => {
                    this.cargando = false;
                    
                    datos.map(dato => this.eliminados[dato.id] = "flex");
                    this.datos = datos;
                })
        },
        peticion(metodo, carga = "") {
            return {
                metodo: metodo,
                ruta: this.ruta,
                carga: ""
            }
        },
        crear() {
            const peticion = this.peticion("POST");
            sessionStorage.setItem("peticion", JSON.stringify(peticion));
            window.location.href = "./administracion/formulario.html";
        },
        modificar(datos) {
            const peticion = this.peticion("PUT", datos);
            sessionStorage(setItem("peticion", JSON.stringify(peticion)));
            window.location.href = "./administracion/formulario.html";
        },
        eliminar(id) {
            const options = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }
            fetch(this.url + "/" + this.ruta + "/eliminar/" + id, options)
                .then(respuesta => {
                    this.lectura();
                    this.eliminados[id] = "none";
                })
        },
    },
    created() {
        this.lectura()
    },
}).mount("#app");
