class Propiedad {
    constructor(id, titulo, direccion, precio, descripcion, imagenes) {
      this.id = id;
      this.titulo = titulo;
      this.direccion = direccion;
      this.precio = precio;
      this.descripcion = descripcion;
      this.imagenes = imagenes;
    }
  }
  
  // Lista de propiedades (puedes importar esta lista desde otro archivo si crece mucho)
  const propiedades = [
    new Propiedad(
      1,
      "Terreno Comercial 3050 m². Padre Hurtado",
      "Cam. San Alberto Hurtado 2513, Padre Hurtado, RM, Chile",
      "CLP $1.000.000 mes",
      "Terreno amplio con uso comercial en excelente ubicación, cercano a servicios y avenidas principales.",
      ["assets/img/house2.jpg", "assets/img/house222.jpg", "assets/img/house22.jpg"]
    ),
    new Propiedad(
      2,
      "Parcela de Lujo en Sector Oriente",
      "Los Litres 7890, Lo Barnechea, Santiago",
      "UF 33.400",
      "Moderna parcela con piscina, jardines formales y casa equipada. Ideal para familias grandes.",
      ["assets/img/house.jpg", "assets/img/house2.jpg", "assets/img/house3.jpg"]
    ),
    new Propiedad(
      3,
      "Casa estilo Mediterraneo",
      "Los Almendrales 7010, Chicureo, Santiago",
      "UF 38.000",
      "Moderna parcela con piscina, jardines formales y casa equipada. Ideal para familias grandes.",
      ["assets/img/house.jpg", "assets/img/house2.jpg", "assets/img/house3.jpg"]
    )
  ];
  
  // Exportar para usar en otros scripts si estás usando módulos ES6
  // export { Propiedad, propiedades };
  