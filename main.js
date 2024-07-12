// Modelos
class Modelo {

    constructor() {

    }

}

class Producto {

    constructor(id, nombre, descripcion, disponibles, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.disponibles = disponibles;
        this.imagen = imagen;    
    }

}

class Usuario {

    constructor(id, nombre, clave, esAdministrador, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.clave = clave;
        this.esAdministrador = esAdministrador;
        this.imagen = imagen;
    }

}

class Imagen {

    constructor(imagen) {
        this.imagen = imagen;
    }

}

// APIImagenes
/*
    /obtener/gatos
*/

// APITienda
/*
    /usuario
        /crear = producto 
        /leer
        /actualizar = id + producto
        /eliminar = id
    /producto
        /crear
        /leer
        /actualizar
        /eliminar
*/

// Servicios
class Servicio {

    constructor() {
        this.direccion;
    }

    recoger(metodo, ) {

    }

    crear(datos) {
        // POST
    }

    leer(data) {
        fetch(this.url)
            .then((response) => )
            .then()
            .catch();
    }

    actualizar(id, datos) {
        // PUT
    }

    eliminar(id) {
        // DELETE
    } 

}

class ServicioUsuario {

}

class ServicioProducto {

}

class ServicioImagenes {

}


apiTienda.("/producto");
apiTienda.leer()

apiUsuarios.leer();
apiUsuarios.crear(usuario);
apiUsuarios.eliminar(id);
apiUsuarios.actualizar(id, nuevoUsuario);

class PhotosAPI {

    constructor() {

    }

    read() {
        
    }

    write() {

    }

    static instance = new PhotosAPI();

}

class ProductsAPI {

}

class UserAPI {


}

class StoreAPI {

    constructor() {

    }

}