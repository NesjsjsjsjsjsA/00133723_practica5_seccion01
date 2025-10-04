const carrito = {
  productos: [
    {
      nombre: "papeli higienico",
      unidades: 4,
      precio: 5,
    },
    {
      nombre: "chocolate",
      unidades: 5,
      precio: 1.4,
    },
  ],
  get precioTotal() {
    let precio = 0;
    for (let i = 0; i < this.productos.length; ++i)
      precio += this.productos[i].unidades * this.productos[i].precio;
    return precio;
  },
};

console.log(carrito.precioTotal) //in console 27
