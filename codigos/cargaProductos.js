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
                    this.desactivado = true;
                    datos.inventario -= 1;
                    fetch(this.url + "/productos/modificar/" + datos.id, {
                        method: "PUT",
                        body: JSON.stringify(datos),
                        headers: { "Content-type": "application/json" },
                    })
                        .then(respuesta => {
                            this.desactivado = false
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
}).mount("#carrusel");

// paginas de productos
createApp({
    data() {
        return {
            url: "https://emiliodevin2.pythonanywhere.com",
            datos: [],
            desactivado: false,
            pagina: "",
            tipo: "",
            filas: [[]],
            contador: 0
        }
    },
    methods: {
        establecerTipoId() {
            this.tipo = {
                "accesorios-gatos.html": 2,
                "accesorios-perros.html": 4,
                "alimentos-gatos.html": 7,
                "alimentos-perros.html": 3,
                "accesorios-gatos": 2,
                "accesorios-perros": 4,
                "alimentos-gatos": 7,
                "alimentos-perros": 3,
            }[this.pagina];
        },
        leer() {
            this.filas = [[]];
            fetch(this.url + "/productos/leer")
                .then(respuesta => respuesta.json())
                .then(datos => {                    
                    this.datos = datos.filter((dato) => dato.inventario > 0);
                    this.datos = this.datos.filter((dato) => dato.tipo_id == this.tipo);
                    this.datos.map((elemento, indice) => {
                        if((indice) % 4 == 0) {
                            this.contador++;
                            this.filas[this.contador] = [];
                        }
                        this.filas[this.contador].push(elemento);
                        
                    })
                });
                    
        },
        reducirInventario(datos) {
            if(datos.inventario < 1) {
                alert("Este producto ya no ser puede comprar")
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
        let composicionUrl = window.location.href.split("/");
        this.pagina = composicionUrl[composicionUrl.length - 1];

        this.establecerTipoId();
        this.leer();
    }
}).mount("#productos")