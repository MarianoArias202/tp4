/* 
4- Escribe una clase Producto para crear objetos. 
Estos objetos, deben presentar las propiedades código, nombre y precio, 
además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores 
de los tres objetos instanciados.
*/

class Producto {
       constructor(codigo, nombre, precio) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.precio = precio;
       }
  
    get mostrarCodigo() {
      return this.codigo;
    }
  
    get mostrarNombre() {
      return this.nombre;
    }
  
    get mostrarPrecio() {
      return this.precio;
    }
  
    set modificarCodigo(nuevoCodigo){
        this.codigo=nuevoCodigo;
    }
    set modificarNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }
  
    set cambiarPrecio(nuevoPrecio) {
      this.precio = nuevoPrecio;
    }
  
    mostrarDetalle() {
      return document.write(`<ul>
              <li>id: ${this.codigo}</li>
              <li>Producto: ${this.nombre}</li>
              <li>Precio: $${this.precio}</li>
                    </ul>`);
    }
  }
  
  let Productos = [];
  
  let harina = new Producto("MA213", "harina de maiz", 200);
  let polenta = new Producto("GH123", "Polenta prestopronta", 120);
  let yogurt = new Producto("S3123", "yogurt la serenisima", 40);
  
  Productos.push(harina);
  Productos.push(polenta);
  Productos.push(yogurt);
  
  for (let i = 0; i < Productos.length; i++) {
   Productos[i].mostrarDetalle();
  }