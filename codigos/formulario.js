
const { createApp } = Vue;

function Producto() {
    return {
        id: 0,
        nombre: "",
        descripcion: "",
        tipoId: 0,
        tipo: "",
        precio: "",
        inventario: "",
        imagen: ""
    }
}

function Usuario() {
    return {
        id: 0,
        nombre: "",
        clave: "",
        esAdministrador: false,
        imagen: "no-imagen",
    }
}

function Sesion() {
    return {
        id: 0,
        usuario_id: 0,
        inicio_sesion: "",
        cierre_sesion: "",
        activo: true
    }
}

function TipoProducto() {
    return {
        id: 0,
        nombre: ""
    }
}

createApp({
    data() {
        return {
            url: "https://emiliodevin2.pythonanywhere.com",
            peticion: {},
            presionado: false,
            accion: "",
            modelo: null,
            seleccion: "",
            a: "un"
        }
    },
    methods: {
        establecerAccion() {
            if(this.peticion.metodo == "POST")
                this.accion = "Creando";
            if(this.peticion.metodo == "PUT")
                this.accion = "Editando";
        },
        establecerTabla() {
            this.modelo = { 
                "productos": Producto, 
                "usuarios": Usuario, 
                "sesiones": Sesion, 
                "tipos": TipoProducto 
            }[this.peticion.ruta]();
            if(this.peticion.carga)
                for(let propiedad in this.modelo)
                    this.modelo[propiedad] = this.peticion.carga[propiedad];
        },
        establecerSeleccion() {
            this.seleccion = {
                productos: "producto",
                usuarios: "usuario",
                tipos: "tipo de producto"
            } [this.peticion.ruta];
            if(this.seleccion == "sesion")
                this.a = "una";
            else this.a = "un";
        },
        generarCampos() {
            
        },
        cancelar() {
            window.location.href = "../administracion.html";
        },
        confirmar() {
            if(this.peticion.metodo == "POST") {
                const options = {
                    body: JSON.stringify(this.modelo),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' }
                }
                fetch(this.url + "/" + this.peticion.ruta + "/crear", options)
                    .then(respuesta => {
                        window.location.href = "../administracion.html";
                })
            }

            if(this.peticion.metodo == "PUT") {
                const options = {
                    body: JSON.stringify(this.modelo),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' }
                }
                fetch(this.url + "/" + this.peticion.ruta + "/modificar/" + this.modelo.id, options)
                    .then(respuesta => {
                        window.location.href = "../administracion.html";
                })
            }
        }
    },
    created() {
        this.peticion = JSON.parse(sessionStorage.getItem("peticion"));
        this.establecerAccion();
        this.establecerTabla();
        this.establecerSeleccion();

    }
}).mount("#app");