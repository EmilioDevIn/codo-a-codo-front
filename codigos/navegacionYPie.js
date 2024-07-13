const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const { createApp } = Vue;

let sesion = sessionStorage.getItem("codigoSesion");

nav.innerHTML = `  
    <div class="topnav" id="myTopnav" style="display: flex; justify-content: space-between;">
        <div>
            <a class="logo"><i class="fa-solid fa-paw fa-sm pata-nav"></i>Peluditos Shop</a>
            <a href="javascript:void(0);" class="icon" onclick="toggleMenu()"><i class="fa fa-bars"></i></a>
            <a href="../index.html">Home</a>
            <a href="../nosotros.html">Nosotros</a>
            <div class="dropdown">
                <button class="dropbtn">Productos
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="../productos/alimentos.html">Alimentos</a>
                    <a href="../productos/accesorios.html">Accesorios</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Servicios
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="../banios.html">Baños</a>
                    <a href="../paseos.html">Paseos</a>
                    <a href="../peluqueria.html">Peluquería</a>
                    <a href="../veterinaria.html">Veterinaria</a>
                </div>
            </div>
            <template v-if="esAdministrador">
                <a href="../administracion.html">Administracion</a>
            </template>
        </div>
        <div class="iconos-three">
            <div>
                <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            </div>
            <div>
                <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            </div>
            <div>
                <template v-if="!hayUsuario">
                    <a href="../registro.html" style = "display: flex;">Registrarse</a>
                    <a href="../ingreso.html" style = "display: flex;">Ingresar</a>
                </template>
                <template v-if="hayUsuario">
                    <div style = "color: white; display: flex;">
                        <a href="" style = "display: flex;"><i class="fa-solid fa-user"></i></a>
                        <div style="display: flex; justify-content:center; flex-direction: column; padding: 0 2ch 0 0;">
                            <p style = "font-size: 0.8em">{{nombre}}</p>
                            <p style = "font-size: 0.6em">{{rol}}</p>
                        </div>
                        <button v-on:click="cerrar()" style = "
                            width: 2em;
                            height: 2em;
                            background-color: #f5f5f5 !important;
                            border: 1px solid #999;
                            border-radius: 4px;
                            margin: auto 0;
                        "><i class="fa-solid fa-x" style="color: #222 !important;"></i></button>
                    </div>
                </template>
            </div>
        </div>
    </div>
`;

createApp({
    data() {
        return {
            codigoSesion: sesion,
            hayUsuario: false,
            nombre: "",
            rol: "",
            esAdministrador: false
        }
    },
    methods: {
        verificarSesion() {
            this.hayUsuario = true;
            fetch("https://emiliodevin2.pythonanywhere.com/sesiones/obtener/" + this.codigoSesion)
                .then(respuesta => respuesta.json())
                .then(datos => {
                    if(JSON.stringify(datos) != "{}") { 
                        fetch("https://emiliodevin2.pythonanywhere.com/usuarios/obtener/" + datos.usuario_id)
                            .then(respuesta => respuesta.json())
                            .then(datos => {
                                this.nombre = datos.nombre;
                                this.rol = (datos.esAdministrador)? "Administrador": "Cliente"; 
                                sessionStorage.setItem("tipoUsuario", this.rol);
                                this.esAdministrador = datos.esAdministrador;   
                            })
                    }
                })
        },
        cerrar() {
            sessionStorage.setItem("codigoSesion", null);
            fetch("https://emiliodevin2.pythonanywhere.com/sesiones/cerrar/" + this.codigoSesion)
                .then(respuesta => {
                    this.hayUsuario = false;
                    this.esAdministrador = false;
                    this.codigoSesion = null;
                    sessionStorage.setItem("tipoUsuario", "Anonimo");
                })
        }
    },
    created() {
        this.codigoSesion = sesion;
        if(this.codigoSesion == "null" || this.codigoSesion == null)
            this.hayUsuario = false;
        else
            this.verificarSesion();
    }
}).mount("#myTopnav")

footer.innerHTML = `
      <footer">
    <div class="div1"><h3 class="logo"> <i class="fa-solid fa-paw fa-sm"></i>
     <h3>Peluditos Shop</h3>
    </div>
    <div class="div0">
            
           <div class="div2">
            <h4>Nosotros</h4>
                <p><a href="">Quienes somos</a></p>
                <p><a href="">Puntos de retiro</a></p>
                <p><a href="">Delivery</a></p>
                <p><a href="">Contacto</a></p>
           </div>

          <div class="div3">
            <h4>Productos</h4>
                <p><a href="">Alimentos para perros</a></p>
                <p><a href="">Alimentos para gatos</a></p>
                <p><a href="">Accesorios para perros</a></p>
                <p><a href="">Accesorios para gatos</a></p>
            </div>

          <div class="div4">
            <h4>Servicios</h4>
               <p><a href="">Baños</a></p>
               <p><a href="">Paseos</a></p>
               <p><a href="">Peluquería</a></p>
               <p><a href="">Veterinaria</a></p>
         </div>

        <div class="div5">
            <h4>Clientes</h4>
                <p><a href="">Mi cuenta</a></p>
                <p><a href="">Mis pedidos</a></p>
                <p><a href="">Cancelar compra</a></p>
                <p><a href="">Términos y condiciones</a></p>
            </div>

        <div class="div6">
            <div class="seguinos">
                <h4>Seguinos</h4>
                <div>
                <a href=""><i class="facebook"><img src="../img/icons8-facebook-rodeado-de-círculo-32.png" alt="facebook"></i></a>
                <a href=""><i class="instagram"><img src="../img/icons8-instagram-32.png" alt="instagram"></i></a>
                <a href=""><i class="twitter"><img src="../img/icons8-logo-de-twitter-32.png" alt="twitter"></i></a>
                <a href=""><i class="whatsapp"><img src="../img/icons8-whatsapp-32.png" alt="whatsapp"></i></a>
                </div>
            </div>
             
            <div class="forma-pago">
                <h4>Formas de pago</h4>
                <div>
                <i class="visa"><img src="../img/icons8-visa-32.png" alt="tarjeta visa"></i>
                <i class="mastercard"><img src="../img/icons8-tarjeta-mastercard-32.png" alt="tarjeta mastercard"></i>
                <i class="amex"><img src="../img/icons8-amex-32.png" alt="amex"></i>
                <i class="mercadopago"><img src="../img/icons8-mercado-pago-32.png" alt="mercadopago"></i>
                <i class="maestro"><img src="../img/icons8-maestro-32 (1).png" alt="maestro"></i>
                <i class="discover"><img src="../img/icons8-discover-32.png" alt="discover"></i>
                <p class="efectivo-transf">Efectivo - Transferencia bancaria</p>
                </div>
            </div>
            
        </div>
    </div>
     <div class="div7">
        <p>Copyright CaC ©2024 - Todos los derechos reservados</p>

     </div>
        
    </footer>
`;