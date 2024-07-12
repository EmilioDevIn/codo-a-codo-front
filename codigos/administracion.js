

const { createApp } = Vue;


createApp({
    data() {
        return {
            url: "http://127.0.0.1:5000",
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
        crear() {
            console.log("aqui")
            const peticion = new Peticion(this.ruta + "/crear");
            sessionStorage.setItem("peticion", peticion.stringify())
            window.location.href = "./administracion/formulario.html";
        },
        modificar(id, datos) {

        },
        eliminar(id) {
            const options = {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'}
            }
            fetch(this.url + "/" + this.ruta + "/eliminar/" + id, options)
                .then(respuesta => {
                    this.eliminados[id] = "none";
                })
        },
    },
    created() {
        this.lectura()
    },
}).mount("#app");
