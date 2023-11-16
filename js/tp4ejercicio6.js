/* 
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. 
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.


*/

class Libro {
    constructor(isbn, titulo, autor, pagcant) {
      this.isbn = isbn;
      this.titulo = titulo;
      this.autor = autor;
      this.pagcant = pagcant;
    }
  
    set cambiarTitulo(tituloNuevo) {
      this.titulo = tituloNuevo;
    }
  
    set cambiarIsbn(isbnNuevo) {
      this.isbn = isbnNuevo;
    }
  
    set cambiarAutor(autorNuevo) {
      this.autor = autorNuevo;
    }
  
    set cambiarCantPaginas(cantPaginasNuevo) {
      this.pagcant = cantPaginasNuevo;
    }
  
    get mostrarIsbn() {
      return this.isbn;
    }
  
    get mostrarTitulo() {
      return this.titulo;
    }
  
    get mostrarAutor() {
      return this.autor;
    }
  
    get mostrarCantPaginas() {
      return parseInt(this.pagcant);
    }
  
    mostrarLibro() {
      return `<p>El libro ${this.mostrarTitulo}, con ISBN N° ${this.mostrarIsbn}, 
      creado por el autor ${this.mostrarAutor}, tiene ${this.mostrarCantPaginas} paginas.</p>`;
    }
  }
  
  function compararLibros(libro1, libro2) {
    if (libro1.mostrarCantPaginas > libro2.mostrarCantPaginas) {
      return `<p>El libro ${libro1.mostrarTitulo} tiene mas paginas</p>`;
    } else if (libro1.mostrarCantPaginas == libro2.mostrarCantPaginas) {
      return `<p>El libro ${libro1.mostrarTitulo} y el libro ${libro2.mostrarTitulo}, 
      tienen la misma cantidad de paginas</p>`;
    } else {
      return `<p>El libro ${libro2.mostrarTitulo} tiene mas paginas</p>`;
    }
  }
  
  let shunko = new Libro(9789500396738,"shunko","Jorge Washington Ábalos",1949);
  let crimen = new Libro(9781535456548, "Los crímenes de la calle Morgue", "Edgar Allan Poe", 1841);
  
  document.write(shunko.mostrarLibro());
  document.write(crimen.mostrarLibro());
  document.write(compararLibros(shunko , crimen ));