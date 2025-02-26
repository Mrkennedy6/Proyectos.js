class libro {
    constructor(libro, autor, año, estado){
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.estado = estado;
        this.capitulos = []; // lista de capitulos, vacia

    }

    //metodo para decribir el libro
    describirLibro(){
        console.log(`libro titulado "${this.titulo}", escrito por ${this.actor} en el año ${this.año}, el estado es: ${this.estado}.`);

    }
    // Metodo para agregar un capitulo

    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo);
        console.log(`Capitulo "${capitulo}" agregado.`);

    }

    // Metodo para eliminar un capitulo

    eliminarcapitulo(capitulo){
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1){
            this.capitulos.splice(index, 1);
            console.log(`Capitulo "${capitulo}" eliminado`)
        }else{
            confirm.log(`El capitulo "{capitulo}" no se encuentra en la lista.`);
        }
    }

    // metodo para mostrar un capitulo
    
    mostrarCapitulos(){
        if(this.capitulos.length > 0){
            confirm.log(`Capitulos del libro "${this.titulo}":`);
            this.capitulos.forEach((capitulo, index) => {
                console.log(`${index + 1}. ${capitulo}`);
            });
            
        }else{
               console.log(`No hay capitulos agregados para el libro "${this.titulo}".`);

        }
    }

}

let libro = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967, "disponible");

libro1.describirLibro();

