

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
                tipos: ""
            },
            eliminados: []
        };
    },
    methods: {
        establecerRutaActiva(ruta) {
            sessionStorage.setItem("ultimaRuta", ruta);
            this.rutaActiva.productos = "";
            this.rutaActiva.usuarios = "";
            this.rutaActiva.tipos = "";
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
                    
                    this.datos = datos;

                    if(this.peticion.ruta == "productos")
                        this.datos = this.reverse();        
                })
        },
        peticion(metodo, carga = "") {
            return {
                metodo: metodo,
                ruta: this.ruta,
                carga: carga
            }
        },
        crear() {
            const peticion = this.peticion("POST");
            sessionStorage.setItem("peticion", JSON.stringify(peticion));
            window.location.href = "./administracion/formulario.html";
        },
        modificar(datos) {
            const peticion = this.peticion("PUT", datos);
            sessionStorage.setItem("peticion", JSON.stringify(peticion));
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
                    return respuesta.json()
                })
                .then(datos => alert({
                    productos: "Producto",
                    usuarios: "Usuario",
                    tipos: "Tipo de producto"
                } [this.ruta] + " eliminado: " + datos.nombre))
        }
    },
    created() {
        let mensajePendiente = sessionStorage.getItem("mensajePendiente");
        if(mensajePendiente && mensajePendiente != "null") {
            alert(mensajePendiente);
            sessionStorage.setItem("mensajePendiente", null);
        }

        let tipoUsuario = sessionStorage.getItem("tipoUsuario");
        if(tipoUsuario != "Administrador")
            window.location.href = "../index.html";

        let rutaGuardada = sessionStorage.getItem("ultimaRuta");
        if(rutaGuardada)
            this.establecerRuta(rutaGuardada)
        
        this.lectura()
    },
}).mount("#app");
