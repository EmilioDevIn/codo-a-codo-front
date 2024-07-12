

export class Aplicacion {

    constructor() {
        this.estado = new Estado();
        this.api = API.instance;
    }

    cargarEstado() {
        let estado = sessionStorage.getItem("estado")
        this.estado = JSON.parse(estado);
        return this;
    }

    grabarEstado() {
        sessionStorage.setItem("estado", JSON.stringify(estado));
        return this;
    }

}

class API {

    constructor() {
        this.url = "http://127.0.0.1:5000";
    }

    static instance = new API();

}

class Estado {

    constructor(sesion = null, peticion = null) {
        this.codigoSesion = sesion;
        this.peticion = peticion;
    }

}

// Estructura de datos
class AccionHTTP {

    constructor(ruta, accion, pendiente = true) {
        this.ruta = ruta;
        this.plantilla = null;
        this.accion = accion;
        this.pendiente = pendiente;

        this.inicializar();
    }

    establecerPlantilla() {
        if(this.ruta == "productos") this.plantilla = Producto;
        if(this.ruta == "usuarios") this.plantilla = Usuario;
        if(this.ruta == "sesion") this.plantilla = Sesion; 
    }

    inicializar() {
        this.establecerPlantilla();
    }

    json() {
        return JSON.stringify({
            ruta: this.ruta,
            accion: this.accion,
            pendiente: this.pendiente
        })
    }

    resolver() {
        this.pendiente = false;
    }

    static parse(cadena) {
        let { ruta, accion, pendiente } = JSON.parse(cadena);
        return new AccionHTTP(ruta, accion, pendiente);
    }

}

class Estado {

    constructor() {

    }
}

class SesionUsuario {

    constructor(codigo = "", nombre = "Anonimo", esAdministrador = false) {
        this.codigo = codigo;

        this.nombre = nombre;
        this.esAdministrador = esAdministrador;
    }

}

class ConfiguracionHTTP {

    constructor(method = "POST", body = false) {
        this.method = method;
        this.headers = {'Content-Type': 'application/json'}
        
        if (body)
            this.body = body
    }

    json() {
        return JSON.parse(JSON.stringify(this));
    }

}

class Peticion {

    constructor(ruta, carga = null) {
        this.ruta = ruta;
        this.accion = null;
        this.modelo = null;
        this.carga = carga;

        this.establecerAccion();
        this.establecerModelo();
    }

    establecerAccion() {
        this.accion = {"modificar": "PUT", "crear": "POST"}[this.ruta.split("/")[1]]
    }

    establecerModelo() {
        this.modelo = {"productos": Producto, "usuarios": Usuario, "tipos": TipoProducto, "sesiones": Sesion}[this.ruta.split("/")[0]]
    }

}

// Modelos
class Modelo {

    constructor(id) {
        this.id = id;
    }

    jsonify() {
        return JSON.parse(JSON.stringify(this));
    }

    stringify() {
        return JSON.stringify(this);
    }

    parse(obj) {
        for(let propiedad in obj)
            this[propiedad] = obj[propiedad];
        return this;
    }

}

class Producto extends Modelo {

    constructor(id = 0, nombre = null, precio = null, descripcion = null, inventario = null, tipo = null, imagen = null) {
        super(id);

        this.tipo = tipo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.inventario = inventario;
        this.imagen = imagen;
    }

}

class TipoProducto extends Modelo {

    constructor(id = 0, nombre = null) {
        super(id);

        this.nombre = nombre;
    }

}

class Usuario extends Modelo {

    constructor(id = 0, nombre = null, clave = null, esAdministrador = null) {
        super(id);
        
        this.nombre = nombre;
        this.clave = clave;
        this.esAdministrador = esAdministrador;

    }

}

class Sesion extends Modelo {

    constructor(id = 0) {

    }

}

export { Sesion, Usuario, TipoProducto, Producto, ConfiguracionHTTP, AccionHTTP, Estado, Peticion };