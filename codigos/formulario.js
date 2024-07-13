
const { createApp } = Vue;

function Producto() {
    return {
        id: 0,
        nombre: "",
        descripcion: "",
        tipo_id: 0,
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
            a: "un",
            tiposParaProducto: []
        }
    },
    methods: {
        establecerAccion() {
            if(this.peticion.metodo == "POST")
                this.accion = "Creando";
            if(this.peticion.metodo == "PUT")
                this.accion = "Editando";
        },
        casoTipoEnProducto() {
            fetch(this.url + "/tipos/leer")
                .then(respuesta => respuesta.json())
                .then(datos => this.tiposParaProducto = datos)
        },
        establecerTabla() {
            this.modelo = { 
                "productos": Producto, 
                "usuarios": Usuario, 
                "sesiones": Sesion, 
                "tipos": TipoProducto 
            }[this.peticion.ruta]();

            if(this.peticion.ruta == "productos")
                this.casoTipoEnProducto();

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
            if(this.modelo.esAdministrador)
                this.modelo.esAdministrador = new Boolean(this.modelo.esAdministrador);

            const options = {
                body: JSON.stringify(this.modelo),
                method: this.peticion.metodo,
                headers: { 'Content-Type': 'application/json' }
            }

            sessionStorage.setItem("mensajePendiente", `Se ${{"POST":"creo", "PUT": "edito"}[this.peticion.metodo]} un ${this.seleccion}: ${this.modelo.nombre}`);

            if(this.peticion.metodo == "POST")
                fetch(this.url + "/" + this.peticion.ruta + "/crear", options)
                    .then(respuesta => { window.location.href = "../administracion.html"; });

            if(this.peticion.metodo == "PUT")
                fetch(this.url + "/" + this.peticion.ruta + "/modificar/" + this.modelo.id, options)
                    .then(respuesta => { window.location.href = "../administracion.html"; });
        }
    },
    created() {
        this.peticion = JSON.parse(sessionStorage.getItem("peticion"));
        this.establecerAccion();
        this.establecerTabla();
        this.establecerSeleccion();

    }
}).mount("#app");