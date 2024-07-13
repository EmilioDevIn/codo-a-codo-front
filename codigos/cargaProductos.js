

// index.html
createApp({
    data() {
        return {
            url: "https://emiliodevin2.pythonanywhere.com",
            datos: [],
            desactivado: false
        }
    },
    methods: {
        leer() {
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
                    this.desativado = true;
                    datos.inventario -= 1;
                    fetch(this.url + "/productos/modificar/" + datos.id, {
                        method: "PUT",
                        body: JSON.stringify(datos),
                        headers: { "Content-type": "application/json" },
                    })
                        .then(respuesta => {
                            this.desactivado = false;
                            this.leer();
                        });
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
