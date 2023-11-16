/*Gestión de inventario en una tienda: Tienes dos arrays,
 uno que representa los productos en stock y otro que almacena los precios de los productos. 
 Debes crear funciones que permitan agregar nuevos productos al inventario, 
 eliminar productos agotados y calcular el valor total del inventario. */






 const inventario = [
    "Guitarra",
    "Violin",
    "Bateria",
    "Pedalera",
    "pedal boss ge7",
    "Bateria",
    "Bajo Ibanez",
    "Amplificador boss katana",
    "Soporte Kun para violin",
    "Arco Fibra de carbono para violin",
    "Bateria",
    "Encordado para Violin Piranito",
    "Bateria",
    "Clavija para violin",
  ];

  const stocklist = [
    2,
    4,
    0,
    10,
    4,
    0,
    32,
    1,
    4,
    4,
    0,
    16,
    0,
    13
  ];
  const precioproducto = [
    90000,
    30000,
    423,
    125000,
    157000,
    423,
    150000,
    235000,
    45000,
    43230,
    423,
    33000,
    423,
    850,
  ];

  const mostrarProductos = (arreglo,arreglo2,arreglo3,titulo)=>{

    document.write(`<h1 class="text-center">${titulo}</h1>`)   
 document.write(`<section class="container">`)

 document.write(`<div class="row">`)
 document.write(`<div class="col-4">`)

 document.write(`<table class="table">
<thead class="thead-dark">
<tr>
   <th scope="col">Inventario <i class="fa-solid fa-dice"></i></th>

  </tr>
 </thead>
 <tbody> `)

 
arreglo.map( producto => document.write(`<tr><td>${producto} </td></tr>`));

document.write(`</tbody> </table>`)

document.write(`</div>`)

document.write(`<div class="col-4">`)

document.write(`<table class="table">
<thead class="thead-dark">
<tr>
  <th scope="col">Precio <i class="fa-solid fa-dice"></i></th>

 </tr>
</thead>
<tbody> `)


arreglo2.map( precio => document.write(`<tr><td>${precio} </td></tr>`));

document.write(`</tbody> </table>`)

document.write(`</div>`)


document.write(`<div class="col-4">`)

 document.write(`<table class="table">
<thead class="thead-dark">
<tr>
   <th scope="col">Cantidad <i class="fa-solid fa-dice"></i></th>

  </tr>
 </thead>
 <tbody> `)

 
arreglo3.map( stock => document.write(`<tr><td>${stock} </td></tr>`));

document.write(`</tbody> </table>`)

document.write(`</div>`)





document.write(`</div>`)
document.write(`</section>`)



}


const agregarproducto = (nuevoproducto,precio,canti,texto)=>{

document.write(`<h1 class="text-center">${texto}</h1>`)              
inventario.push(nuevoproducto)
precioproducto.push(precio)
stocklist.push(canti)

}








//mostramos el inventario 
mostrarProductos(inventario, precioproducto,stocklist,'inventario')


//agregamos productos al inventario

productoagregado = "Violonchelo"
precionuevoproducto = "1900"
cantidad= "4"

agregarproducto(productoagregado,precionuevoproducto,cantidad,"productos agregados (violonchelos)")

mostrarProductos(inventario, precioproducto,stocklist,'productos agregados')

//eliminamos productos

 

const resultado = stocklist.filter(cantidad => cantidad != '0');
const resultado2 = precioproducto.filter(preciop => preciop != '423');
const resultado3 = inventario.filter(producto => producto != 'Bateria');





mostrarProductos(resultado3, resultado2,resultado,'eliminados')

//calcular valor total del inventario


const i = 0;
const suma = precioproducto.reduce(
  (acumulador, siguienteelemento) => acumulador + siguienteelemento,
  i,
);


document.write(`<h1 class="text-center">la suma total es: ${suma} </h1>`)




