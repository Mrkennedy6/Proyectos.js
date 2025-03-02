class Libro {
    constructor(titulo, autor, año, estado) {
      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
      this.estado = estado;
      this.capitulos = []; // Lista de capítulos, inicialmente vacía
    }
  
    // Método para describir el libro
    describirLibro() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    }
  
    // Método para agregar un capítulo
    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo "${capitulo}" agregado.`);
    }
  
    // Método para eliminar un capítulo
    eliminarCapitulo(capitulo) {
      const index = this.capitulos.indexOf(capitulo);
      if (index !== -1) {
        this.capitulos.splice(index, 1);
        console.log(`Capítulo "${capitulo}" eliminado.`);
      } else {
        console.log(`El capítulo "${capitulo}" no se encuentra en la lista.`);
      }
    }
  
    // Método para mostrar todos los capítulos
    mostrarCapitulos() {
      if (this.capitulos.length > 0) {
        console.log(`Capítulos del libro "${this.titulo}":`);
        this.capitulos.forEach((capitulo, index) => {
          console.log(`${index + 1}. ${capitulo}`);
        });
      } else {
        console.log(`No hay capítulos agregados para el libro "${this.titulo}".`);
      }
    }
  }
  
  // Ejemplo de uso:
  let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");
  
  // Describir el libro
  libro1.describirLibro();

  console.log(libro1);
  // Agregar capítulos
  libro1.agregarCapitulo("Capítulo 1: El coronel Aureliano Buendía");

  console.log(libro1);
  libro1.agregarCapitulo("Capítulo 2: La guerra civil");
  console.log(libro1);
  
  // Mostrar capítulos
  libro1.mostrarCapitulos();
  console.log(libro1);
  // Eliminar un capítulo
  libro1.eliminarCapitulo("Capítulo 1: El coronel Aureliano Buendía");
  console.log(libro1);
  // Mostrar capítulos después de eliminar uno
  libro1.mostrarCapitulos();
  console.log(libro1);

  console.log(libro1);


