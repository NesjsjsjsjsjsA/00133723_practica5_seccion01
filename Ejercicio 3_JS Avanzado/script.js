const libreria = {
  libros: [
    {
      nombre: "el caballeto oscuro",
      autor: "Frank Miller",
      leido: false,
    },
    {
      nombre: "El mundo amarillo",
      autor: "Alberto Espinoza",
      leido: false,
    },
    {
      nombre: "El ingenioso hidalgo Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      leido: false,
    },
    {
      nombre: "Harry Potter y el caliz de fuego",
      autor: "J.K.Rowling",
      leido: true,
    },
  ],

  log() {
    const { libros } = this;
    let resultados = "";
    for (const libro of libros) {
      const prefijo = libro.leido ? "Ya has" : "Aun no has";
      resultados =
        `${resultados}${prefijo} leido ${libro.nombre} de ${libro.autor}\n`;
    }
    console.log(resultados);
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido)
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
    const elementoRandom = librosNoLeidos[indiceRandom];
    console.log(
      `Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`
    );
  },
};

console.log(libreria.log());
console.log(libreria.sugerencia())
