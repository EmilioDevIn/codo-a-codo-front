const nav = document.querySelector("nav");
const footer = document.querySelector("footer");

//---------Barra de navegación----------
nav.innerHTML = `  
        <div class="topnav" id="myTopnav">
        <a class="logo"> <i class="fa-solid fa-paw fa-sm pata-nav"></i>Peluditos Shop</a>
        <a href="javascript:void(0);" class="icon" onclick="toggleMenu()"><i class="fa fa-bars"></i></a>
        <a href="index.html">Home</a>
        <a href="nosotros.html">Nosotros</a>
          <div class="dropdown">
             <button class="dropbtn">Productos
             <i class="fa fa-caret-down"></i>
             </button>
            <div class="dropdown-content">
            <a href="alimentos.html">Alimentos</a>
            <a href="accesorios.html">Accesorios</a>
            </div>
         </div>
        <div class="dropdown">
            <button class="dropbtn">Servicios
            <i class="fa fa-caret-down"></i>
            </button>
          <div class="dropdown-content">
            <a href="banios.html">Baños</a>
            <a href="paseos.html">Paseos</a>
            <a href="peluqueria.html">Peluquería</a>
            <a href="veterinaria.html">Veterinaria</a>
          </div>
        </div>
        
     <div class="iconos-three">
       
        <div><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></div>
        <div><a href=""><i class="fa-solid fa-user"></i></a></div>
        <div><a href=""><i class="fa-solid fa-cart-shopping"></i></a></div>
        </div>
      </div>
      </div>`;

//---------Footer----------

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
                <a href=""><i class="facebook"><img src="img/icons8-facebook-rodeado-de-círculo-32.png" alt="facebook"></i></a>
                <a href=""><i class="instagram"><img src="img/icons8-instagram-32.png" alt="instagram"></i></a>
                <a href=""><i class="twitter"><img src="img/icons8-logo-de-twitter-32.png" alt="twitter"></i></a>
                <a href=""><i class="whatsapp"><img src="img/icons8-whatsapp-32.png" alt="whatsapp"></i></a>
                </div>
            </div>
             
            <div class="forma-pago">
                <h4>Formas de pago</h4>
                <div>
                <i class="visa"><img src="img/icons8-visa-32.png" alt="tarjeta visa"></i>
                <i class="mastercard"><img src="img/icons8-tarjeta-mastercard-32.png" alt="tarjeta mastercard"></i>
                <i class="amex"><img src="img/icons8-amex-32.png" alt="amex"></i>
                <i class="mercadopago"><img src="img/icons8-mercado-pago-32.png" alt="mercadopago"></i>
                <i class="maestro"><img src="img/icons8-maestro-32 (1).png" alt="maestro"></i>
                <i class="discover"><img src="img/icons8-discover-32.png" alt="discover"></i>
                <p class="efectivo-transf">Efectivo - Transferencia bancaria</p>
                </div>
            </div>
            
        </div>
    </div>
     <div class="div7">
        <p>Copyright CaC ©2024 - Todos los derechos reservados</p>

     </div>
        
    </footer>`;

function toggleMenu() {
  var x = document.getElementById("myTopnav");
  var icon = document.querySelector(".icon i");

  if (x.className === "topnav") {
    x.className += " responsive";
    icon.className = "fa fa-times"; // Cambia el icono a 'x'
  } else {
    x.className = "topnav";
    icon.className = "fa fa-bars"; // Cambia el icono de vuelta a hamburguesa
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000); // Cambia la imagen cada 5 segundos (5000 milisegundos)

  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container-ofertas");
  const nextBtn = document.getElementById("nextBtn");

  const data = [
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2024-03/Excellent_Perros_AdultMedyGran.png.webp?itok=8y3j5DeW",
      text1: "Excellent Smart Perro Ad. 20 Kg",
      text2: "$45.097",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2024-03/Excellent_Perros_PuppyPequenos.png.webp?itok=4djBD_pp",
      text1: "Eccellent Puppy Ad. X 20 Kg",
      text2: "$36.399",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-08/Reduced_Calorie_Gato_Frente_Pro_Plan.png.webp?itok=Jk50_Y18",
      text1: "Pro Plan Gato BC. 15 Kg",
      text2: "$69.502",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-10/Adult-7%2B-Carne-%26-Arroz_1.png.webp?itok=mqlGkqs3",
      text1: "Gato Adulto X 20 Kg",
      text2: "$45.336",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-08/gato_adulto_frenre_pro_plan.png.webp?itok=LpfdNG7y",
      text1: "Pro Plan Gato Adulto X 20 Kg",
      text2: "$64.821",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-10/Kitten-Pollo-%26-H%C3%ADgado_1.png.webp?itok=XesLYaeC",
      text1: "Pro Plan Kitten X 15 Kg",
      text2: "$66.603",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2022-10/ProPlan-Sensitive-Skin-Cachorros.png.webp?itok=uLsD2Jf5",
      text1: "Sensitive Cachorro 21+3 Kg",
      text2: "$54.636",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl:
        "https://www.purina.com.ar/sites/default/files/styles/card_450px/public/2024-01/1200x1200_DC_Gran_Comienzo_cachorros_M%26G.png.webp?itok=Nz8mWmXk",
      text1: "Dog Chow S/Col Ad.X 21 Kg",
      text2: "$39.503",
      text3: "Envios a domicilio sin cargo",
    },
  ];

  let startIndex = 0;
  let cardsPerRow = 4; // Número de tarjetas por fila

  function loadCards() {
    container.innerHTML = "";

    for (
      let i = startIndex;
      i < startIndex + cardsPerRow && i < data.length;
      i++
    ) {
      const cardData = data[i];

      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = cardData.imageUrl;
      card.appendChild(img);

      const textDiv = document.createElement("div");
      textDiv.classList.add("card-text");
      textDiv.innerHTML = `
                <p>${cardData.text1}</p>
                <h3>${cardData.text2}</h3>
                <p>${cardData.text3}</p>
            `;
      card.appendChild(textDiv);

      container.appendChild(card);
    }
  }

  loadCards();

  nextBtn.addEventListener("click", function () {
    startIndex += cardsPerRow;
    if (startIndex >= data.length) {
      startIndex = 0;
    }
    loadCards();
  });

  // Ajustar el número de tarjetas por fila en función del tamaño de la pantalla
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 992) {
      cardsPerRow = 4;
    } else if (window.innerWidth >= 768) {
      cardsPerRow = 2;
    } else {
      cardsPerRow = 1;
    }
    loadCards(); // Recargar las tarjetas con el nuevo número por fila
  });
});

let sliderInner = document.querySelector(".slider-inner");
let images = sliderInner.querySelectorAll("img");
let index = 1;
setInterval(function () {
  let percentage = index * -100;

  sliderInner.style.transform = "translateX(" + percentage + "%)";
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
}, 5000);

document.getElementById("botonIngresar").addEventListener("click", function () {
  // Redireccionar al usuario a login.html
  window.location.href = "login.html";
});

document
  .getElementById("botonEnviarMail")
  .addEventListener("click", function () {
    var emailInput = document.getElementById("email");

    if (emailInput.value) {
      // Mostrar el mensaje de éxito como un alert
      alert("Email enviado con éxito");
      // Limpiar el campo de entrada
      emailInput.value = "";
    } else {
      // En caso de que el campo esté vacío, mostrar un mensaje de error
      alert("Por favor, ingresa un email válido!!");
    }
  });
  //funcion hecha con vue para el  consumo de apis 
const { createApp } = Vue;

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
}).mount("#app");
