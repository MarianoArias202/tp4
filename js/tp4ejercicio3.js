/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
y mostrar sus propiedades, calcular el perímetro y el área */

class Rectangulo{
        constructor(ladoA, ladoB){
        this.alto=ladoA;
        this.ancho=ladoB;
    }

    set ModificarAltura(newAltura){
        this.alto=newAltura;
    }
    set modificarAncho(nuevoAncho){
        this.ancho=nuevoAncho;
    }

    get altoRectangulo(){
        return this.alto;
    }

    get anchoRectangulo(){
        return this.ancho;
    }

    get area(){
        return this.alto*this.ancho;
    }

    get perimetro(){
        return 2*(this.alto+this.ancho);
    }

    detalle(){
        return `<p>El rectangulo tiene una altura de ${this.altoRectangulo} cm 
        y un ancho de ${this.anchoRectangulo} cm </P>`;
    }


}


document.write(`<h1>rectangulo 1</h1>`);

let rectangulo1= new Rectangulo( 15, 11);
document.write(rectangulo1.detalle());
document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

document.write('<h3>editar el rectangulo 1</h3>');

rectangulo1.ModificarAltura=19;
rectangulo1.modificarAnchoAncho=30;

document.write(rectangulo1.detalle());
document.write(`El area del rectangulo es ${rectangulo1.area} y su perimetro es ${rectangulo1.perimetro}`);

document.write(`<h2>rectangulo 2</h2>`);

let rectangulo2= new Rectangulo( 2, 43);
document.write(rectangulo2.detalle());
document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);

document.write('<h3>editar el rectangulo 2</h3>');

rectangulo2.ModificarAltura=32;
rectangulo2.modificarAncho=52;

document.write(rectangulo2.detalle());
document.write(`El area del rectangulo es ${rectangulo2.area} y su perimetro es ${rectangulo2.perimetro}`);