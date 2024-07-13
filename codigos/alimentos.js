function crearTarjeta(producto) {
  return `
        <div class="tarjeta">
            <img src="${producto.imageUrl}" alt="${producto.text1}">
            <h3>${producto.text1}</h3>
            <p>${producto.text2}</p>
            <p>${producto.text3}</p>
        </div>
    `;
}

function crearFila(grupo) {
  return `<div class="fila">${grupo
    .map((producto) => crearTarjeta(producto))
    .join("")}</div>`;
}

function grupos(datos, cantidad) {
  let grupos = [];
  for (let i = 0; i < datos.length; i += cantidad) {
    grupos.push(datos.slice(i, i + cantidad));
  }
  return grupos;
}

function renderizar(raiz, grupos) {
  raiz.innerHTML = grupos.map((grupo) => crearFila(grupo)).join("");
}

const alimentos = {
  "alimento-perro": [
    {
      imageUrl: "./img/img-caninos/alimento-veguis.jpg",
      text1: "Veguis Ad. 15 Kg",
      text2: "$47.361",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Dog-chow.jpg",
      text1: "Dog Chow ExtraLife Ad. X 21 Kg",
      text2: "$76.400",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Gandum.jpg",
      text1: "Gandum Balanceado Ad. 20 Kg",
      text2: "$16.764",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Old-Prince-Cordero.jpg",
      text1: "Old Price Cordero Ad. X 15 Kg",
      text2: "$69.900",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Optimum.jpg",
      text1: "Optimum Puppy X 15 Kg",
      text2: "$46.900",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Pedigree.jpg",
      text1: "Pedigree Dentastix Ad. X 7 Uni",
      text2: "$2.490",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Proplan.jpg",
      text1: "Proplan OptiHealth 20 Kg",
      text2: "$54.636",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Pucherito.jpg",
      text1: "Pucherito Alimento para Perro Ad. X 15 Kg",
      text2: "$39.200",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Vitalcan.jpg",
      text1: "Vitalcan Balanceado Ad. X 3 Kg",
      text2: "$13.800",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Yenu.jpg",
      text1: "Yenu Alimento para Cachorros Ad. X 10 Kg",
      text2: "$48.400",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Simpli.jpg",
      text1: "Simpli Alimento para Perro Ad. X 15 Kg",
      text2: "$42.200",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-caninos/Eukanuba.jpg",
      text1: "Eukanuba Perro Adulto Ad. X 3 Kg",
      text2: "$15.200",
      text3: "Envios a domicilio sin cargo",
    },
  ],
  "alimento-gato": [
    {
      imageUrl: "./img/img-felinos/bel-cat.jpg",
      text1: "Alimento belcat Ad. 10 Kg",
      text2: "$15.361",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/canin-club.jpg",
      text1: "Royal Canin Club Ad. X 7.5Kg",
      text2: "$39.400",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/canin-veterinary.jpg",
      text1: "Royal Canin Veterinary Ad. 20Kg",
      text2: "$62.764",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/complete.jpg",
      text1: "Vital Can Complete Ad. X 15 Kg",
      text2: "$25.980",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/criadores.jpg",
      text1: "Maintenance Criadores Ad X 15Kg",
      text2: "$36.400",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/monami.jpg",
      text1: "Mom Ami Alimentos Ad. X 7 Uni",
      text2: "$49.590",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/old-prince-adulto.jpg",
      text1: "Old Prince Adulto Ad 20Kg",
      text2: "$54.636",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/premium-mix.jpg",
      text1: "Vitalcan Primium Mix Ad.X 705Kg",
      text2: "$24.500",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/purina.jpg",
      text1: "Purina Ad.X 3Kg",
      text2: "$40.830",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/purina2.jpg",
      text1: "Purina Ad.X 10 Kg",
      text2: "$48.400",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/royal-canin.jpg",
      text1: "Royal Canin Ad.X 15 Kg",
      text2: "$42.200",
      text3: "Envios a domicilio sin cargo",
    },
    {
      imageUrl: "./img/img-felinos/vitalcan-premium.jpg",
      text1: "Vitalcan Premium Ad.X 3Kg",
      text2: "$15.200",
      text3: "Envios a domicilio sin cargo",
    },
  ],
  "accesorio-gato": [
    {
      imageUrl: "./img/img-ac-gato/bebedero.jpg",
      text1: "Bebedero Fuente Gatos y Perros",
      text2: "$45.360",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/bolso.jpg",
      text1: "Bolso para Transporte de Mascotas",
      text2: "$12.400",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/casa-gato.jpg",
      text1: "Casa Cucha Para Gato",
      text2: "$36.764",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/cepillo.jpg",
      text1: "Cepillo de Dientes Para Mascotas",
      text2: "$2.400",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/comedero.jpg",
      text1: "Comedero 2 en 1 Mascotas",
      text2: "$23.400",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/kit-gato.jpg",
      text1: "Kit  de Bienvenida Gato",
      text2: "$100.590",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/raton.jpg",
      text1: "Juguete Raton Electrico",
      text2: "$35.636",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-gato/transportador.jpg",
      text1: "Transportador Impermeable Gato y Perro",
      text2: "$17.500",
      text3: "Envios a domicilio sin cargo",
    },
  ],
  "accesorio-perro": [
    {
      imageUrl: "./img/img-ac-perro/arnes.jpg",
      text1: "Conj.Pretal Arnes",
      text2: "$8.360",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/bolso-transporte.jpg",
      text1: "Bolso para Transporte de Mascotas",
      text2: "$12.400",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/campera-perro.jpg",
      text1: "Campera Chaleco",
      text2: "$15.764",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/chaleco.jpg",
      text1: " Abrigo Chaleco Friza para Perros ",
      text2: "$16.400",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/collar.jpg",
      text1: "Collar para Mascotas Clasico",
      text2: "$11.400",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/kit-alimento.jpg",
      text1: "Kit de  Alimento para Mascotas",
      text2: "$9.999",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/maquina.jpg",
      text1: "Maquina de cortar pelo Mascotas",
      text2: "$28.636",
      text3: "Envios a domicilio sin cargo",
    },

    {
      imageUrl: "./img/img-ac-perro/transportador-perro.jpg",
      text1: "Transportador Impermeable perritos ",
      text2: "$59.500",
      text3: "Envios a domicilio sin cargo",
    },
  ],
};

function Producto() {
  return {
    nombre:
    descripcion
    precio
    inventario: 12,
    tipo_id,
    imagen:
  }
}
function inicializar(animal) {
  const contenido = document.getElementById("contenido-" + animal);
  if (contenido) {
    renderizar(contenido, grupos(alimentos[animal], 4));
    console.log(`Contenido para ${animal} inicializado.`);
  } else {
    console.error(`Elemento con id 'contenido-${animal}' no encontrado.`);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inicializar("alimento-perro");
  inicializar("alimento-gato");
  inicializar("accesorio-gato");
  inicializar("accesorio-perro");
});
