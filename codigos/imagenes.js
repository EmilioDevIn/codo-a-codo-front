createApp({
    data() {
        return {
            urls: [
                "https://api.thecatapi.com/v1/images/search?limit=10",
                "https://dog.ceo/api/breed/hound/images",
            ],
            gatos: null,
            perros: null,
            error: false,
            iteracion: 0,
            perro: "",
            gato: "",
        };
    },
    methods: {
        fetchData(url, storeInd) {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (storeInd) this.perros = data;
                    else this.gatos = data;
                })
                .catch(() => {
                    this.error = true;
                });
        },
        cambiarImagen() {
            if (this.perros == null || this.gatos == null) {
                return;
            }
            this.gato = this.gatos[this.iteracion % 10].url;
            this.perro =
                this.perros.message[this.iteracion % this.perros.message.length];
            this.iteracion++;
        },
    },
    created() {
        this.fetchData(this.urls[0], false);
        this.fetchData(this.urls[1], true);
        setInterval(this.cambiarImagen, 2000);
    },
}).mount("#imagenes");
