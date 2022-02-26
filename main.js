class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    stockActual(cantidadComprada) {
        this.stock -= cantidadComprada;
        console.log(this.nombre + "\nSTOCK: " + this.stock);
    }
}

let listaProductosMenu = "Nuestras tortas son:"
let contador = 0;

const brownie = new Producto("brownie", 2000, 10);
const cheescake = new Producto("cheescake", 3000, 5);
const rogel = new Producto("rogel", 2200, 3);
const lemonpie = new Producto("lemonpie", 1500, 6);

const listadoProductos = [brownie, cheescake, rogel, lemonpie];

listadoProductos.push(new Producto("milhojas", 2000, 2));

for (producto of listadoProductos) {
    contador++;
    listaProductosMenu += "\n" + contador + "- " + producto.nombre;
}

alert(listaProductosMenu);

let cantidadComprada;
let total = 0;

function stockInsuficiente(producto) {
    alert("no tenemos suficiente stock de " + producto);
}

function compra(producto) {
    cantidadComprada = parseInt(prompt("Cuantos quiere:"));

    if (producto.stock >= cantidadComprada) {
        producto.stockActual(cantidadComprada);
        total += producto.precio * cantidadComprada;
    } else {
        stockInsuficiente(producto.nombre);
    }
}

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a COMPRAR"));

for (let i = 0; i < cantidadProductos; i++) {
    let productoAcomprar = prompt("¿Que producto quiere comprar?");
    productoAcomprar = productoAcomprar.toLowerCase();

    const listadoFiltrado = listadoProductos.find(x => x.nombre == productoAcomprar);

    if (listadoFiltrado) {
        compra(listadoFiltrado)
    } else { alert("No tenemos ese producto"); }

}
alert("Usted tiene que pagar $" + total);