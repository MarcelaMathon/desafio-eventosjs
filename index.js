class Articulos {
    constructor(imagen, nombre, precio, descripcion) {
        this.imagen = imagen;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
  }
  
  const cardsArticulos = [
    new Articulos("./images/maillot-gris.png", "Maillot", "$1790", "Tejido liso en el cuerpo (85% Poliester-15% Lycra). Tejido en panel en las mangas y laterales para mejorar el flujo de aire (90% Poliester-10% Lycra). Tres bolsillos traseros. Borde elástico en la parte inferior que mantiene la camiseta en su lugar. Protección UV50+"),

    new Articulos("./images/chalecos.png", "Chaleco cortaviento", "$1990", "Delantera repelente al viento y al agua, y lycra en la espalda. Cuenta con 3 bolsillos traseros. Gracias a su liviandad este chaleco lo puedes poner en el bolsillo trasero de tu maillot de ciclismo y adaptarte rápidamente a los cambios climáticos."),

    new Articulos("./images/calza-corta.png", "Calza corta", "$2590", "Lycra con 4 sentidos de estiramiento. 81% Poliester - 19% Lycra - Protección UV50+. Badana altamente anatómica. Puños de tela con silicona para proporcionar un agarre comodo y suave."),

    new Articulos("./images/calzas-largas.png", "Calza larga", "$2690", "Lycra con 4 sentidos de estiramiento. 81% Poliester - 19% Lycra -Protección UV50+. Badana altamente anatómica. Paneles reflectivos en parte posterior baja de la pierna."),

    new Articulos("./images/camperafina.png", "Campera neopreno", "$2390", "Campera cálida confeccionada con telas elásticas. Diseñada para paseos intensos en condiciones de otoño y primavera. Su elasticidad garantiza un gran ajuste y libertad de movimiento. Cuenta con tres bolsillos traseros y una pieza de silicona para mantener la campera en su lugar."),

    new Articulos("./images/nepreno-dama.png", "Campera térmica impermeable", "$2790", "Campera liviana de tela firme en frente, espalda y mangas, elástica en los laterales. Con paneles reflectivos que dan mejor visibilidad en la noche y días grises. Frente y espalda: 100% Poliester impermeable. Laterales: 90% Poliester 10% Lycra."),
    
  ]
  
  function mostrarDetalleArticulos(articulo){
  
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";
    
    catalogo.classList.add("classcatalogo");
  
    catalogo.innerHTML = `
      <img src="${articulo.imagen}" alt="${articulo.nombre}">
      <h2>${articulo.nombre}</h2>
      <h3>${articulo.precio}</h3>
      <p>${articulo.descripcion}</p>
    `;
    
    
  }
  
  function botonVolverAtras(){
    const botonVolver = document.createElement("button");
    botonVolver.classList.add("boton-volver-atras");
    botonVolver.innerText = "Volver al catálogo";
    botonVolver.addEventListener("click", () => {
      mostrarCatalogo(cardsArticulos);
    }
    )
    document.getElementById("catalogo").prepend(botonVolver);
  }
  
  function crearBotonVerInformacion(articulo){
    const button = document.createElement("button");
    button.innerText = "Más información";
    button.classList.add("boton-ver-informacion");
    button.addEventListener("click", () => {
        mostrarDetalleArticulos(articulo);
        botonVolverAtras();
      })
    return button;
  }
  
  function mostrarCatalogo(cardsArticulos) {
  
    const catalogo =  document.getElementById("catalogo");
    catalogo.innerHTML = "";
  
    cardsArticulos.forEach(articulo => {
      const divArticulo = document.createElement("div");
      divArticulo.classList.add("articulo");
      divArticulo.innerHTML = `
        <img src="${articulo.imagen}" alt="${articulo.nombre}">
        <h2>${articulo.nombre}</h2>
        <h3>${articulo.precio}</h3>
      `;

      const botonVerDetalle = crearBotonVerInformacion(articulo)
      divArticulo.appendChild(botonVerDetalle);

      catalogo.appendChild(divArticulo);
    })
  }
  
  mostrarCatalogo(cardsArticulos);