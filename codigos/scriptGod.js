const productos = [
    {
      nombre: 'Veguis Ad. 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 47.361,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/alimento-veguis.jpg'
    },
    {
      nombre: 'Dog Chow ExtraLife Ad. X 21 Kg',
      descripcion: 'Descripcion decente',
      precio: 76.4,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Dog-chow.jpg'
    },
    {
      nombre: 'Gandum Balanceado Ad. 20 Kg',
      descripcion: 'Descripcion decente',
      precio: 16.764,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Gandum.jpg'
    },
    {
      nombre: 'Old Price Cordero Ad. X 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 69.9,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Old-Prince-Cordero.jpg'
    },
    {
      nombre: 'Optimum Puppy X 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 46.9,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Optimum.jpg'
    },
    {
      nombre: 'Pedigree Dentastix Ad. X 7 Uni',
      descripcion: 'Descripcion decente',
      precio: 2.49,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Pedigree.jpg'
    },
    {
      nombre: 'Proplan OptiHealth 20 Kg',
      descripcion: 'Descripcion decente',
      precio: 54.636,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Proplan.jpg'
    },
    {
      nombre: 'Pucherito Alimento para Perro Ad. X 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 39.2,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Pucherito.jpg'
    },
    {
      nombre: 'Vitalcan Balanceado Ad. X 3 Kg',
      descripcion: 'Descripcion decente',
      precio: 13.8,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Vitalcan.jpg'
    },
    {
      nombre: 'Yenu Alimento para Cachorros Ad. X 10 Kg',
      descripcion: 'Descripcion decente',
      precio: 48.4,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Yenu.jpg'
    },
    {
      nombre: 'Simpli Alimento para Perro Ad. X 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 42.2,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Simpli.jpg'
    },
    {
      nombre: 'Eukanuba Perro Adulto Ad. X 3 Kg',
      descripcion: 'Descripcion decente',
      precio: 15.2,
      inventario: 12,
      tipo_id: 3,
      imagen: '../img/img-caninos/Eukanuba.jpg'
    },
    {
      nombre: 'Alimento belcat Ad. 10 Kg',
      descripcion: 'Descripcion decente',
      precio: 15.361,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/bel-cat.jpg'
    },
    {
      nombre: 'Royal Canin Club Ad. X 7.5Kg',
      descripcion: 'Descripcion decente',
      precio: 39.4,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/canin-club.jpg'
    },
    {
      nombre: 'Royal Canin Veterinary Ad. 20Kg',
      descripcion: 'Descripcion decente',
      precio: 62.764,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/canin-veterinary.jpg'
    },
    {
      nombre: 'Vital Can Complete Ad. X 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 25.98,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/complete.jpg'
    },
    {
      nombre: 'Maintenance Criadores Ad X 15Kg',
      descripcion: 'Descripcion decente',
      precio: 36.4,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/criadores.jpg'
    },
    {
      nombre: 'Mom Ami Alimentos Ad. X 7 Uni',
      descripcion: 'Descripcion decente',
      precio: 49.59,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/monami.jpg'
    },
    {
      nombre: 'Old Prince Adulto Ad 20Kg',
      descripcion: 'Descripcion decente',
      precio: 54.636,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/old-prince-adulto.jpg'
    },
    {
      nombre: 'Vitalcan Primium Mix Ad.X 705Kg',
      descripcion: 'Descripcion decente',
      precio: 24.5,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/premium-mix.jpg'
    },
    {
      nombre: 'Purina Ad.X 3Kg',
      descripcion: 'Descripcion decente',
      precio: 40.83,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/purina.jpg'
    },
    {
      nombre: 'Purina Ad.X 10 Kg',
      descripcion: 'Descripcion decente',
      precio: 48.4,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/purina2.jpg'
    },
    {
      nombre: 'Royal Canin Ad.X 15 Kg',
      descripcion: 'Descripcion decente',
      precio: 42.2,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/royal-canin.jpg'
    },
    {
      nombre: 'Vitalcan Premium Ad.X 3Kg',
      descripcion: 'Descripcion decente',
      precio: 15.2,
      inventario: 12,
      tipo_id: 7,
      imagen: '../img/img-felinos/vitalcan-premium.jpg'
    },
    {
      nombre: 'Bebedero Fuente Gatos y Perros',
      descripcion: 'Descripcion decente',
      precio: 45.36,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/bebedero.jpg'
    },
    {
      nombre: 'Bolso para Transporte de Mascotas',
      descripcion: 'Descripcion decente',
      precio: 12.4,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/bolso.jpg'
    },
    {
      nombre: 'Casa Cucha Para Gato',
      descripcion: 'Descripcion decente',
      precio: 36.764,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/casa-gato.jpg'
    },
    {
      nombre: 'Cepillo de Dientes Para Mascotas',
      descripcion: 'Descripcion decente',
      precio: 2.4,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/cepillo.jpg'
    },
    {
      nombre: 'Comedero 2 en 1 Mascotas',
      descripcion: 'Descripcion decente',
      precio: 23.4,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/comedero.jpg'
    },
    {
      nombre: 'Kit  de Bienvenida Gato',
      descripcion: 'Descripcion decente',
      precio: 100.59,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/kit-gato.jpg'
    },
    {
      nombre: 'Juguete Raton Electrico',
      descripcion: 'Descripcion decente',
      precio: 35.636,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/raton.jpg'
    },
    {
      nombre: 'Transportador Impermeable Gato y Perro',
      descripcion: 'Descripcion decente',
      precio: 17.5,
      inventario: 12,
      tipo_id: 2,
      imagen: '../img/img-ac-gato/transportador.jpg'
    },
    {
      nombre: 'Conj.Pretal Arnes',
      descripcion: 'Descripcion decente',
      precio: 8.36,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/arnes.jpg'
    },
    {
      nombre: 'Bolso para Transporte de Mascotas',
      descripcion: 'Descripcion decente',
      precio: 12.4,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/bolso-transporte.jpg'
    },
    {
      nombre: 'Campera Chaleco',
      descripcion: 'Descripcion decente',
      precio: 15.764,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/campera-perro.jpg'
    },
    {
      nombre: ' Abrigo Chaleco Friza para Perros ',
      descripcion: 'Descripcion decente',
      precio: 16.4,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/chaleco.jpg'
    },
    {
      nombre: 'Collar para Mascotas Clasico',
      descripcion: 'Descripcion decente',
      precio: 11.4,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/collar.jpg'
    },
    {
      nombre: 'Kit de  Alimento para Mascotas',
      descripcion: 'Descripcion decente',
      precio: 9.999,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/kit-alimento.jpg'
    },
    {
      nombre: 'Maquina de cortar pelo Mascotas',
      descripcion: 'Descripcion decente',
      precio: 28.636,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/maquina.jpg'
    },
    {
      nombre: 'Transportador Impermeable perritos ',
      descripcion: 'Descripcion decente',
      precio: 59.5,
      inventario: 12,
      tipo_id: 4,
      imagen: '../img/img-ac-perro/transportador-perro.jpg'
    }
];

function configuracion(producto) {
    return {
        body: JSON.stringify(producto),
        method: "POST",
        headers: { "Content-type": "application/json"}
    }
}

function fetcher() {
    alert("comenzado! gadagadigadagadao");
    for(producto of productos)
        fetch("https://emiliodevin2.pythonanywhere.com/productos/crear", configuracion(producto))
    alert("fin :D")
}

fetcher();