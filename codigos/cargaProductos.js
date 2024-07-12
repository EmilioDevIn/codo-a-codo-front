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

// index.html
createApp({
    data() {
        return {
            url: "http://127.0.0.1:5000",
            datos: []
        }
    },
    methods: {
        leer() {
            alert(window.location.href)
            fetch(this.url + "/productos/leer")
                .then(respuesta => respuesta.json())
                .then(datos => {
                    this.datos = datos.filter((dato) => dato.inventario > 0);
                    this.datos = this.datos.filter((dato, i) => i < 4)
                });
                    
        },
        reducirInventario(datos) {
            if(datos.inventario < 1) {
                alert("Este producto ya no se puede comprar")
            } else {
                let tipo = sessionStorage.getItem("tipoUsuario");
                if(tipo == "Cliente") {
                    datos.inventario -= 1;
                    fetch(this.url + "/productos/modificar/" + datos.id, {
                        method: "PUT",
                        body: JSON.stringify(datos),
                        headers: { "Content-type": "application/json" },
                    })
                        .then(respuesta => this.leer());
                }
                else {
                    alert("No estas autorizado a realizar esta operacion por se un usuario: " + tipo)
                }
            }
        }
    },
    created() {
        this.leer();
    }
}).mount("#carrusel")

// paginas de productos
