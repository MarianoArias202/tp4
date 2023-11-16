/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.

*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, fechNac) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.fechNac = fechNac;
    }
  
    mostrarDetalleGeneracion(generacion, marco, historia, rasgo) {
      return `<ul>
      <li> Generación: ${generacion}</li>
      <li> Marco temporal:  ${marco} </li>
      <li> Circunstancia histórica:  ${historia}</li>
      <li> Rasgo característico: ${rasgo} </li>
    </ul>
    `;
    }
    mostrarGeneracion() {
      if (this.fechNac >= 1930 && this.fechNac <= 1948) {
        return this.mostrarDetalleGeneracion(
          "generacion de Los niños de la Posguerra",
          "1930-1948",
          "conflictos",
          "temperancia"
        );
      } else if (this.fechNac >= 1949 && this.fechNac <= 1968) {
        return this.mostrarDetalleGeneracion(
          "baby Boom",
          "1949-1968",
          "aumento de natalidad tremenda",
          "trabajadores"
        );
      } else if (this.fechNac >= 1969 && this.fechNac < 1980) {
        return this.mostrarDetalleGeneracion(
          "Generación X",
          "1969 - 1980",
          "generación obsesionada por conseguir un buen lugar en su trabajo.",
          "Soñadores"
        );
      } else if (this.fechNac >= 1981 && this.fechNac < 1993) {
        return this.mostrarDetalleGeneracion(
          " Los Millenials: De 1981 a 1993",
          "1981 - 1993",
          "Son los primeros 'nativos digitales'",
          "Autodidactas y autónomos. Les cuesta trabajar en equipo."
        );
      } else if (this.fechNac >= 1994 && this.fechNac< 2010) {
        return this.mostrarDetalleGeneracion(
          "Generación Z (Centennials)",
          "1994 - 2010",
          "Apasionados de las redes sociales",
          " Adictos a las redes sociales"
        );
      } else if (this.fechNac >= 2011) {
        return this.mostrarDetalleGeneracion(
          "Generación Alfa",
          "2011 - Actualidad",
          "Los más 'peques' de las generaciones",
          "Tienen menos amigos 'reales' y más 'virtuales'"
        );
      } else {
        return '<p>No se posee datos para la fecha seleccionada</p>';
      }
    }
  
    esMayorDeEdad() {
      if (this.edad >= 21) {
        return true;
      } else {
        return false;
      }
    }
  
    mostrarDatos() {
      return `<ul>
        <li>Persona</li>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Genero: ${this.sexo}</li>
        <li>Peso: ${this.peso} Kg</li>
        <li>Altura: ${this.altura} Cm</li>
        <li>Año de nacimiento: ${this.fechNac}</li>
        </ul>
        `;
    }

  }
  
  let nombre = prompt("Ingrese un nombre");
  let dni = prompt("Ingrese su dni");
  let edad = prompt("Ingrese una edad");
  let genero = prompt("Ingrese un genero : H(hombre), M(Mujer)");
  let peso = prompt("Ingrese un peso en kg");
  let altura = prompt("Ingrese una altura cm");
  let anioNac = prompt("Ingrese el año de nacimiento");
  let personaNueva = new Persona(nombre, edad, genero, peso, altura, anioNac);
  
  document.write(personaNueva.mostrarDatos());
  document.write(
    `<p>La persona es mayor de edad: ${
      personaNueva.esMayorDeEdad ? "Si" : "No"
    }</p>`
  );
  document.write(personaNueva.mostrarGeneracion());